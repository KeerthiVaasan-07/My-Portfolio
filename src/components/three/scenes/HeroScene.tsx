import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090909, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xA78BFA, 2.8);
    mainLight.position.set(5, 6, 4);
    scene.add(mainLight);

    const goldRimLight = new THREE.DirectionalLight(0xB99B72, 2.2);
    goldRimLight.position.set(-6, -4, -2);
    scene.add(goldRimLight);

    const cyanFillLight = new THREE.PointLight(0x38BDF8, 2.0, 10);
    cyanFillLight.position.set(0, -3, 3);
    scene.add(cyanFillLight);

    // 5. Central 3D Sculpture: Chrome Cyber Core (Torus Knot + Geodesic Spheres + Orbiting Rings)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Metallic chrome material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 1.5,
      wireframe: false,
    });

    // Outer Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 160, 32, 2, 3);
    const knotMesh = new THREE.Mesh(knotGeometry, chromeMaterial);
    coreGroup.add(knotMesh);

    // Inner glowing geometric core (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(0.75, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xA78BFA,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Nested Orbiting Cyber Rings
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xD5D5D5,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xB99B72,
      metalness: 0.85,
      roughness: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 120);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 6;
    coreGroup.add(ringMesh2);

    // Orbiting Satellite Markers
    const satelliteGroup = new THREE.Group();
    coreGroup.add(satelliteGroup);

    const satGeo = new THREE.OctahedronGeometry(0.12);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xA78BFA,
      emissive: 0x8b5cf6,
      emissiveIntensity: 1.2,
      metalness: 0.9,
      roughness: 0.1,
    });

    const satCount = 4;
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      sat.position.set(Math.cos(angle) * 2.1, Math.sin(angle) * 0.8, Math.sin(angle) * 2.1);
      satelliteGroup.add(sat);
      satellites.push(sat);
    }

    // 6. Atmospheric Floating Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      scales[i] = Math.random() * 0.04 + 0.01;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xA78BFA,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Mouse and Scroll Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let clickBurst = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };

    const handleClick = () => {
      clickBurst = 1.0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('click', handleClick);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Click burst decay
      if (clickBurst > 0.001) {
        clickBurst *= 0.94;
      } else {
        clickBurst = 0;
      }

      // Dynamic rotation
      const speedMultiplier = 1 + clickBurst * 4;
      knotMesh.rotation.x = elapsedTime * 0.25 * speedMultiplier;
      knotMesh.rotation.y = elapsedTime * 0.35 * speedMultiplier;

      innerMesh.rotation.x = -elapsedTime * 0.4;
      innerMesh.rotation.z = elapsedTime * 0.5;

      ringMesh1.rotation.z = elapsedTime * 0.2;
      ringMesh1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.1;

      ringMesh2.rotation.z = -elapsedTime * 0.15;
      ringMesh2.rotation.y = Math.PI / 4 + Math.cos(elapsedTime * 0.4) * 0.1;

      satelliteGroup.rotation.y = elapsedTime * 0.3;

      // Core position reaction to mouse & scroll
      const scrollOffset = scrollY * 0.002;
      coreGroup.position.x = mouse.x * 0.7;
      coreGroup.position.y = mouse.y * 0.5 - scrollOffset;
      coreGroup.rotation.y = mouse.x * 0.6;
      coreGroup.rotation.x = -mouse.y * 0.4;

      // Camera parallax
      camera.position.x = mouse.x * 0.4;
      camera.position.y = mouse.y * 0.3;
      camera.lookAt(0, -scrollOffset * 0.5, 0);

      // Pulse inner light
      innerMat.emissiveIntensity = 0.6 + Math.sin(elapsedTime * 3) * 0.3 + clickBurst * 1.5;

      // Particle subtle rotation
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('click', handleClick);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      knotGeometry.dispose();
      chromeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      satGeo.dispose();
      satMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webGlSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-72 h-72 rounded-full border border-cyber-accent/30 bg-gradient-to-tr from-cyber-accent/10 via-transparent to-cyber-gold/10 animate-pulse-subtle flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-editorial-metallic/20 animate-spin" style={{ animationDuration: '24s' }} />
          <div className="absolute w-24 h-24 rounded-full border border-cyber-accent/40 animate-ping" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
      title="Click and drag to interact with the obsidian cyber core"
    />
  );
};
