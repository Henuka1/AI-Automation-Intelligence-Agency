import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const InteractiveCube: React.FC<{ className?: string }> = ({
  className = 'w-full h-full',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. True Isometric Orthographic Camera matching screenshot
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

    // Standard isometric camera angle (equal projection on X, Y, Z)
    camera.position.set(25, 25, 25);
    camera.lookAt(0, 0, 0);

    // 3. Renderer with transparent background & crisp antialiasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% transparent background
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Lighting configured for exact 3-tone architectural shading:
    // Top face: bright white | Left face: light grey | Right face: dark shadow grey
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
    scene.add(ambientLight);

    // Main key light from top-left illuminates top and left faces
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(-15, 30, 10);
    scene.add(keyLight);

    // Subtle top rim light to enhance top face brightness
    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 40, 0);
    scene.add(topLight);

    // Subtle soft bounce light from bottom
    const bounceLight = new THREE.DirectionalLight(0xf1f5f9, 0.25);
    bounceLight.position.set(0, -20, 10);
    scene.add(bounceLight);

    // 5. Construct 7x7x7 Voxel Cube Matrix matching reference screenshot
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    const gridSize = 7; // Exactly 7x7x7 = 343 cubes as shown in screenshot
    const boxSize = 0.88;
    const spacing = 1.02; // Tight gap ratio matching screenshot
    const totalCubes = gridSize * gridSize * gridSize;

    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

    // High quality architectural matte white material
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

    // Base rotation offsets for the exact isometric orientation
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let velocityX = 0;
    let velocityY = 0;

    // 6. Mouse / Touch interaction handlers
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

        // Smooth cursor hover parallax tilt
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

    const domElement = renderer.domElement;
    domElement.style.touchAction = 'none';
    domElement.style.cursor = 'grab';

    domElement.addEventListener('pointerdown', (e) => {
      domElement.style.cursor = 'grabbing';
      onPointerDown(e);
    });

    window.addEventListener('pointerup', () => {
      domElement.style.cursor = 'grab';
      onPointerUp();
    });

    window.addEventListener('pointermove', onPointerMove);

    // 7. Responsive resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
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

    // 8. Animation loop with smooth lerping & ambient breathing
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Inertia after dragging
      if (!isDragging) {
        velocityX *= 0.94;
        velocityY *= 0.94;
        targetRotY += velocityX;
        targetRotX += velocityY;
      }

      // Smooth damping (lerp) towards cursor target
      currentRotY += (targetRotY - currentRotY) * 0.07;
      currentRotX += (targetRotX - currentRotX) * 0.07;

      // Gentle ambient floating breathing
      const time = performance.now() * 0.0012;
      const ambientBob = Math.sin(time) * 0.08;

      cubeGroup.rotation.y = currentRotY;
      cubeGroup.rotation.x = currentRotX;
      cubeGroup.position.y = ambientBob;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative select-none touch-none ${className}`}
      title="Hover or drag cursor to rotate the 3D voxel cube matrix"
    />
  );
};
