import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ContactScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const violetLight = new THREE.PointLight(0xA78BFA, 3.5, 10);
    violetLight.position.set(2, 3, 3);
    scene.add(violetLight);

    const goldLight = new THREE.PointLight(0xB99B72, 2.5, 10);
    goldLight.position.set(-3, -2, 2);
    scene.add(goldLight);

    // 3D Metallic Shield / Polyhedron
    const group = new THREE.Group();
    scene.add(group);

    // Chrome Octahedron
    const octGeo = new THREE.OctahedronGeometry(1.2, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.95,
      roughness: 0.15,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    group.add(octMesh);

    // Outer wireframe cage
    const cageGeo = new THREE.OctahedronGeometry(1.5, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xA78BFA,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // Orbiting particle ring
    const count = 120;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.9 + (Math.random() - 0.5) * 0.3;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xB99B72,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const pRing = new THREE.Points(pGeo, pMat);
    group.add(pRing);

    // Mouse responsiveness
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      octMesh.rotation.y = t * 0.3;
      octMesh.rotation.x = t * 0.2;

      cageMesh.rotation.y = -t * 0.2;
      cageMesh.rotation.z = t * 0.15;

      pRing.rotation.y = t * 0.4;

      group.rotation.y = mouse.x * 0.4;
      group.rotation.x = -mouse.y * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      octGeo.dispose();
      octMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-72 sm:h-80 md:h-96 relative flex items-center justify-center cursor-pointer pointer-events-auto"
    />
  );
};
