import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { skillsData } from '../../../data/skills';
import type { SkillItem } from '../../../types';

interface SkillSceneProps {
  selectedSkillId: string | null;
  onSelectSkill: (skill: SkillItem) => void;
}

export const SkillScene: React.FC<SkillSceneProps> = ({
  selectedSkillId,
  onSelectSkill,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedSkillRef = useRef<string | null>(selectedSkillId);

  useEffect(() => {
    selectedSkillRef.current = selectedSkillId;
  }, [selectedSkillId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xA78BFA, 3.0, 15);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    // Central Core Object (Obsidian Dodecahedron)
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    const coreGeo = new THREE.DodecahedronGeometry(0.8, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(coreMesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xA78BFA,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85, 0), wireMat);
    centralGroup.add(wireMesh);

    // Orbit Ring Visualizers
    const orbitRadii = [2.2, 3.2, 4.0];
    orbitRadii.forEach((radius, idx) => {
      const orbitGeo = new THREE.RingGeometry(radius - 0.008, radius + 0.008, 64);
      const orbitMat = new THREE.MeshBasicMaterial({
        color: idx === 0 ? 0xA78BFA : idx === 1 ? 0xB99B72 : 0x4B5563,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2,
      });
      const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
      orbitMesh.rotation.x = Math.PI / 2 + (idx * 0.2 - 0.2);
      scene.add(orbitMesh);
    });

    // Skill Nodes Setup
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeMeshes: {
      mesh: THREE.Mesh;
      wireMesh: THREE.Mesh;
      skill: SkillItem;
      baseRadius: number;
      speed: number;
      angle: number;
      inclination: number;
    }[] = [];

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    skillsData.forEach((skill, index) => {
      const radius = 2.0 + (index % 3) * 0.9 + Math.floor(index / 3) * 0.2;
      const speed = 0.25 / (1 + (index % 3) * 0.4);
      const angle = (index / skillsData.length) * Math.PI * 2;
      const inclination = ((index % 4) - 1.5) * 0.35;

      const hexColor = parseInt(skill.color.replace('#', '0x'), 16);

      const nodeGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: hexColor,
        metalness: 0.6,
        roughness: 0.2,
        emissive: hexColor,
        emissiveIntensity: 0.3,
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);

      // Node outer glow wireframe ring
      const haloGeo = new THREE.RingGeometry(0.32, 0.36, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: hexColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const wireNode = new THREE.Mesh(haloGeo, haloMat);
      mesh.add(wireNode);

      mesh.userData = { skillId: skill.id, skill };
      nodesGroup.add(mesh);

      nodeMeshes.push({
        mesh,
        wireMesh: wireNode,
        skill,
        baseRadius: radius,
        speed,
        angle,
        inclination,
      });
    });

    // Dynamic Constellation Lines connecting nodes to core and adjacent nodes
    const maxLinePoints = (nodeMeshes.length * 2 + 1) * 2;
    const linePositions = new Float32Array(maxLinePoints * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xA78BFA,
      transparent: true,
      opacity: 0.3,
    });
    const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(constellationLines);

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        nodeMeshes.map((n) => n.mesh),
        false
      );

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const skill = hit.userData.skill as SkillItem;
        if (skill) {
          onSelectSkill(skill);
        }
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Core rotation
      centralGroup.rotation.y = elapsedTime * 0.25;
      centralGroup.rotation.x = elapsedTime * 0.15;

      // Update nodes positions
      const currentSelected = selectedSkillRef.current;
      let lineIndex = 0;
      const positions = lineGeometry.attributes.position.array as Float32Array;

      nodeMeshes.forEach((node, i) => {
        const curAngle = node.angle + elapsedTime * node.speed * 0.4;
        const x = Math.cos(curAngle) * node.baseRadius;
        const y = Math.sin(curAngle * 2 + node.inclination) * 0.6;
        const z = Math.sin(curAngle) * node.baseRadius;

        node.mesh.position.set(x, y, z);
        node.wireMesh.rotation.z = elapsedTime * 1.5;
        node.wireMesh.lookAt(camera.position);

        const isSelected = currentSelected === node.skill.id;
        const scale = isSelected ? 1.45 : 1.0;
        node.mesh.scale.set(scale, scale, scale);

        const mat = node.mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = isSelected ? 1.1 : 0.35;

        // Line to core
        positions[lineIndex++] = 0;
        positions[lineIndex++] = 0;
        positions[lineIndex++] = 0;
        positions[lineIndex++] = x;
        positions[lineIndex++] = y;
        positions[lineIndex++] = z;

        // Line to next node for constellation network
        const nextNode = nodeMeshes[(i + 1) % nodeMeshes.length];
        positions[lineIndex++] = x;
        positions[lineIndex++] = y;
        positions[lineIndex++] = z;
        positions[lineIndex++] = nextNode.mesh.position.x;
        positions[lineIndex++] = nextNode.mesh.position.y;
        positions[lineIndex++] = nextNode.mesh.position.z;
      });

      lineGeometry.attributes.position.needsUpdate = true;

      // Subtle scene tilt from mouse
      scene.rotation.y = mouse.x * 0.3;
      scene.rotation.x = -mouse.y * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [onSelectSkill]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[520px] relative cursor-pointer"
      title="Click on any orbiting skill node to inspect detailed technical context"
    />
  );
};
