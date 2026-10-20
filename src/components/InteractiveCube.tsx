import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { images } from '../assets/images';

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||
      canvas.getContext('experimental-webgl');
    return Boolean(window.WebGLRenderingContext && gl);
  } catch {
    return false;
  }
}

/**
 * High-performance, silky smooth fallback with interactive 3D tilt and drag rotation
 * when WebGL context is lost, blocked, or unavailable in the host browser.
 */
const InteractiveCubeFallback: React.FC<{ className?: string }> = ({
  className = 'w-full h-full',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });
  const targetRotRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current) {
        velocityRef.current.x *= 0.92;
        velocityRef.current.y *= 0.92;
        targetRotRef.current.y += velocityRef.current.x;
        targetRotRef.current.x += velocityRef.current.y;
      }

      // Smooth lerp
      currentRotRef.current.x += (targetRotRef.current.x - currentRotRef.current.x) * 0.08;
      currentRotRef.current.y += (targetRotRef.current.y - currentRotRef.current.y) * 0.08;

      setRotX(currentRotRef.current.x);
      setRotY(currentRotRef.current.y);

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      const dx = e.clientX - prevPointerRef.current.x;
      const dy = e.clientY - prevPointerRef.current.y;
      velocityRef.current = { x: dx * 0.25, y: -dy * 0.25 };
      targetRotRef.current.y += dx * 0.35;
      targetRotRef.current.x -= dy * 0.35;
      prevPointerRef.current = { x: e.clientX, y: e.clientY };
    } else {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotRef.current.y = relX * 18;
      targetRotRef.current.x = -relY * 14;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={`relative select-none flex items-center justify-center touch-none overflow-hidden ${className}`}
      style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
      title="Hover or drag cursor to rotate the 3D voxel cube matrix"
    >
      <div
        className="w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={images.cube}
          alt="3D Interactive Cube Matrix"
          className="max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)] select-none"
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transformOrigin: 'center center',
            transition: isDraggingRef.current ? 'none' : 'transform 0.08s ease-out',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export const InteractiveCube: React.FC<{ className?: string }> = ({
  className = 'w-full h-full',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(() => !checkWebGLSupport());

  useEffect(() => {
    if (useFallback) return;

    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let isDisposed = false;

    try {
      const width = container.clientWidth || 460;
      const height = container.clientHeight || 460;

      // 1. Scene setup
      const scene = new THREE.Scene();

      // 2. Isometric Orthographic Camera
      const frustumSize = 12.2;
      const aspect = width / height;
      const camera = new THREE.OrthographicCamera(
        (frustumSize * aspect) / -2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        frustumSize / -2,
        -100,
        100
      );
      camera.position.set(25, 25, 25);
      camera.lookAt(0, 0, 0);

      // 3. Safe WebGLRenderer instantiation
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false,
      });

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      const domElement = renderer.domElement;
      domElement.style.touchAction = 'none';
      domElement.style.cursor = 'grab';

      // Handle context loss gracefully
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        if (!isDisposed) {
          setUseFallback(true);
        }
      };
      domElement.addEventListener('webglcontextlost', handleContextLost, false);

      container.appendChild(domElement);

      // 4. Lighting configured for 3-tone architectural shading
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
      keyLight.position.set(-15, 30, 10);
      scene.add(keyLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
      topLight.position.set(0, 40, 0);
      scene.add(topLight);

      const bounceLight = new THREE.DirectionalLight(0xf1f5f9, 0.25);
      bounceLight.position.set(0, -20, 10);
      scene.add(bounceLight);

      // 5. Construct 7x7x7 Voxel Cube Matrix
      const cubeGroup = new THREE.Group();
      scene.add(cubeGroup);

      const gridSize = 7;
      const boxSize = 0.88;
      const spacing = 1.02;
      const totalCubes = gridSize * gridSize * gridSize;

      const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.32,
        metalness: 0.04,
        flatShading: false,
      });

      const instancedMesh = new THREE.InstancedMesh(geometry, material, totalCubes);
      const dummy = new THREE.Object3D();

      let idx = 0;
      const offset = ((gridSize - 1) * spacing) / 2;

      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            const posX = x * spacing - offset;
            const posY = y * spacing - offset;
            const posZ = z * spacing - offset;

            dummy.position.set(posX, posY, posZ);
            dummy.updateMatrix();
            instancedMesh.setMatrixAt(idx++, dummy.matrix);
          }
        }
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      cubeGroup.add(instancedMesh);

      // Interaction variables
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let isDragging = false;
      let previousPointerX = 0;
      let previousPointerY = 0;
      let velocityX = 0;
      let velocityY = 0;

      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        if (isDragging) {
          const deltaX = clientX - previousPointerX;
          const deltaY = clientY - previousPointerY;
          velocityX = deltaX * 0.007;
          velocityY = deltaY * 0.007;
          targetRotY += velocityX;
          targetRotX += velocityY;
          previousPointerX = clientX;
          previousPointerY = clientY;
        } else {
          const rect = container.getBoundingClientRect();
          const relX = ((clientX - rect.left) / rect.width - 0.5) * 2;
          const relY = ((clientY - rect.top) / rect.height - 0.5) * 2;
          targetRotY = relX * 0.45;
          targetRotX = relY * 0.35;
        }
      };

      const onPointerDown = (e: MouseEvent | TouchEvent) => {
        isDragging = true;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        previousPointerX = clientX;
        previousPointerY = clientY;
        velocityX = 0;
        velocityY = 0;
      };

      const onPointerUp = () => {
        isDragging = false;
      };

      domElement.addEventListener('pointerdown', (e) => {
        domElement.style.cursor = 'grabbing';
        onPointerDown(e);
      });

      const handleWindowPointerUp = () => {
        if (domElement) domElement.style.cursor = 'grab';
        onPointerUp();
      };

      window.addEventListener('pointerup', handleWindowPointerUp);
      window.addEventListener('pointermove', onPointerMove);

      // 6. Responsive resize observer
      resizeObserver = new ResizeObserver(() => {
        if (!container || !renderer) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        if (newW === 0 || newH === 0) return;
        const newAspect = newW / newH;
        camera.left = (frustumSize * newAspect) / -2;
        camera.right = (frustumSize * newAspect) / 2;
        camera.top = frustumSize / 2;
        camera.bottom = frustumSize / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      });
      resizeObserver.observe(container);

      // 7. Animation loop
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        if (!isDragging) {
          velocityX *= 0.94;
          velocityY *= 0.94;
          targetRotY += velocityX;
          targetRotX += velocityY;
        }

        currentRotY += (targetRotY - currentRotY) * 0.07;
        currentRotX += (targetRotX - currentRotX) * 0.07;

        const time = performance.now() * 0.0012;
        const ambientBob = Math.sin(time) * 0.08;

        cubeGroup.rotation.y = currentRotY;
        cubeGroup.rotation.x = currentRotX;
        cubeGroup.position.y = ambientBob;

        renderer?.render(scene, camera);
      };

      animate();

      // 8. Cleanup
      return () => {
        isDisposed = true;
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }
        resizeObserver?.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', handleWindowPointerUp);
        domElement.removeEventListener('webglcontextlost', handleContextLost);

        if (container.contains(domElement)) {
          container.removeChild(domElement);
        }

        geometry.dispose();
        material.dispose();

        if (renderer) {
          try {
            renderer.dispose();
            renderer.forceContextLoss?.();
          } catch {}
        }
      };
    } catch (err) {
      console.warn('WebGL initialization failed, using high-fidelity fallback:', err);
      setUseFallback(true);
      return;
    }
  }, [useFallback]);

  if (useFallback) {
    return <InteractiveCubeFallback className={className} />;
  }

  return (
    <div
      ref={mountRef}
      className={`relative select-none touch-none ${className}`}
      title="Hover or drag cursor to rotate the 3D voxel cube matrix"
    />
  );
};
