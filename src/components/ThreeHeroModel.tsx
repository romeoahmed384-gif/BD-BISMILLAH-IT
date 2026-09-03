import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RotateCw, Sparkles, Box, Eye, Layers, Compass, Maximize2 } from 'lucide-react';

interface ThreeHeroModelProps {
  modelUrl?: string; // Optional custom .glb url
  className?: string;
  onInteract?: () => void;
}

export const ThreeHeroModel: React.FC<ThreeHeroModelProps> = ({
  modelUrl,
  className = '',
  onInteract,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [modelType, setModelType] = useState<'glb' | 'procedural'>('procedural');

  // References to keep track of animation objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const screenTextureCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const screenTextureRef = useRef<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 4.2);

    // 3. Renderer with soft shadows & WebGL performance settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // 4. Ambient Lighting & Soft Directional Shadows (as requested)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    // Key Light with soft shadow map
    const dirLight1 = new THREE.DirectionalLight(0xff4757, 2.5); // Warm Rose
    dirLight1.position.set(4, 5, 4);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    dirLight1.shadow.camera.near = 0.5;
    dirLight1.shadow.camera.far = 15;
    dirLight1.shadow.bias = -0.001;
    scene.add(dirLight1);

    // Cyan Fill Light from opposite side for modern cyber contrast
    const dirLight2 = new THREE.DirectionalLight(0x00d2d3, 1.8);
    dirLight2.position.set(-4, 3, -3);
    scene.add(dirLight2);

    // Amber Golden Point Light near base
    const pointLight = new THREE.PointLight(0xffa502, 2.8, 10);
    pointLight.position.set(0, -0.4, 2);
    scene.add(pointLight);

    // 5. Model Container Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Shadow receiver plane for soft grounded contact shadow
    const planeGeo = new THREE.PlaneGeometry(6, 6);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.0;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Collect materials for wireframe toggle
    const materials: THREE.MeshStandardMaterial[] = [];
    materialsRef.current = materials;

    // Helper: Build dynamic screen canvas texture for the laptop
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    screenTextureCanvasRef.current = screenCanvas;
    const screenCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTextureRef.current = screenTexture;

    let codeLineIdx = 0;
    const updateScreenCanvas = (timeVal: number) => {
      if (!screenCtx) return;
      screenCtx.fillStyle = '#090d16';
      screenCtx.fillRect(0, 0, 512, 320);

      // Top IDE bar
      screenCtx.fillStyle = '#1e293b';
      screenCtx.fillRect(0, 0, 512, 32);
      // Window control dots
      screenCtx.fillStyle = '#f43f5e';
      screenCtx.beginPath();
      screenCtx.arc(20, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#fbbf24';
      screenCtx.beginPath();
      screenCtx.arc(36, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#10b981';
      screenCtx.beginPath();
      screenCtx.arc(52, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();

      // Title
      screenCtx.fillStyle = '#cbd5e1';
      screenCtx.font = 'bold 13px monospace';
      screenCtx.fillText('BDBismillahIT-App.tsx', 75, 20);

      // Terminal / Code text
      screenCtx.font = '14px monospace';
      const lines = [
        '// BD Bismillah IT Center • Khulna',
        'import { Future, Success } from "bd-it";',
        'const trainee = new Professional();',
        'await trainee.master([',
        '  "Graphics Design & UI/UX",',
        '  "Full-Stack Web & MERN",',
        '  "Digital Marketing & SEO",',
        '  "Office Applications"',
        ']);',
        'trainee.earnCertificate("Govt. Technical Board");',
        'console.log("Career: 100% Successful!");',
      ];

      const visibleLines = Math.floor((timeVal * 1.5) % (lines.length + 3));
      lines.forEach((line, idx) => {
        if (idx <= visibleLines) {
          if (line.startsWith('//')) screenCtx.fillStyle = '#64748b';
          else if (line.includes('const') || line.includes('import')) screenCtx.fillStyle = '#f43f5e';
          else if (line.includes('"')) screenCtx.fillStyle = '#34d399';
          else screenCtx.fillStyle = '#38bdf8';
          screenCtx.fillText(line, 24, 65 + idx * 22);
        }
      });

      // Blinking cursor
      if (Math.sin(timeVal * 5) > 0) {
        screenCtx.fillStyle = '#f43f5e';
        screenCtx.fillRect(24 + (visibleLines < lines.length ? lines[visibleLines]?.length || 0 : 0) * 8.5, 65 + (visibleLines < lines.length ? visibleLines : lines.length - 1) * 22 - 12, 8, 16);
      }

      screenTexture.needsUpdate = true;
    };

    // 6. Function to build High-End Procedural 3D Workstation (Lightweight & Guaranteed 60fps)
    const buildProceduralTechStation = () => {
      const stationGroup = new THREE.Group();

      // Materials
      const metallicDarkMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.85,
        roughness: 0.25,
      });
      materials.push(metallicDarkMat);

      const aluminumMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        metalness: 0.9,
        roughness: 0.2,
      });
      materials.push(aluminumMat);

      const glowScreenMat = new THREE.MeshBasicMaterial({
        map: screenTexture,
      });

      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        metalness: 0.95,
        roughness: 0.15,
        emissive: 0xd97706,
        emissiveIntensity: 0.25,
      });
      materials.push(goldMat);

      const roseEmissiveMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        emissive: 0xf43f5e,
        emissiveIntensity: 0.8,
        roughness: 0.3,
      });
      materials.push(roseEmissiveMat);

      // Laptop Base
      const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
      const baseMesh = new THREE.Mesh(baseGeo, metallicDarkMat);
      baseMesh.position.y = -0.3;
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      stationGroup.add(baseMesh);

      // Trackpad
      const trackpadGeo = new THREE.PlaneGeometry(0.7, 0.45);
      const trackpadMesh = new THREE.Mesh(trackpadGeo, aluminumMat);
      trackpadMesh.rotation.x = -Math.PI / 2;
      trackpadMesh.position.set(0, -0.255, 0.45);
      stationGroup.add(trackpadMesh);

      // Keyboard area
      const kbGeo = new THREE.BoxGeometry(2.1, 0.02, 0.85);
      const kbMesh = new THREE.Mesh(kbGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 }));
      kbMesh.position.set(0, -0.255, -0.15);
      stationGroup.add(kbMesh);

      // Laptop Screen Lid (Angled back at ~108 degrees)
      const lidGroup = new THREE.Group();
      lidGroup.position.set(0, -0.26, -0.8);
      lidGroup.rotation.x = -0.32; // Tilted angle

      const lidGeo = new THREE.BoxGeometry(2.4, 1.5, 0.05);
      const lidMesh = new THREE.Mesh(lidGeo, metallicDarkMat);
      lidMesh.position.set(0, 0.75, 0);
      lidMesh.castShadow = true;
      lidGroup.add(lidMesh);

      // Glowing Screen Display
      const screenGeo = new THREE.PlaneGeometry(2.26, 1.36);
      const screenMesh = new THREE.Mesh(screenGeo, glowScreenMat);
      screenMesh.position.set(0, 0.75, 0.028);
      lidGroup.add(screenMesh);

      // Back logo glow (Emblem)
      const logoBackGeo = new THREE.CircleGeometry(0.18, 24);
      const logoBackMesh = new THREE.Mesh(logoBackGeo, roseEmissiveMat);
      logoBackMesh.position.set(0, 0.75, -0.028);
      logoBackMesh.rotation.y = Math.PI;
      lidGroup.add(logoBackMesh);

      stationGroup.add(lidGroup);

      // Floating Orbital Holographic Rings (Tech Gyroscope)
      const ring1Geo = new THREE.TorusGeometry(1.9, 0.02, 16, 64);
      const ring1Mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      materials.push(ring1Mat);
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      ring1.name = 'orbitalRing1';
      stationGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(1.6, 0.018, 16, 64);
      const ring2Mat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        emissive: 0xe11d48,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      materials.push(ring2Mat);
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.y = Math.PI / 4;
      ring2.name = 'orbitalRing2';
      stationGroup.add(ring2);

      // Floating Diamond Data Crystal (Centerpiece Top)
      const crystalGeo = new THREE.OctahedronGeometry(0.35, 0);
      const crystalMat = new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.5,
        roughness: 0.1,
        metalness: 0.9,
      });
      materials.push(crystalMat);
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.position.set(0, 1.4, 0);
      crystal.name = 'floatingCrystal';
      crystal.castShadow = true;
      stationGroup.add(crystal);

      // Orbiting Satellite Nodes
      const nodeCount = 5;
      for (let i = 0; i < nodeCount; i++) {
        const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0x34d399 : 0xf43f5e,
          emissive: i % 2 === 0 ? 0x10b981 : 0xe11d48,
          emissiveIntensity: 0.8,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(
          Math.cos((i / nodeCount) * Math.PI * 2) * 1.8,
          0.3 + Math.sin(i) * 0.4,
          Math.sin((i / nodeCount) * Math.PI * 2) * 1.8
        );
        nodeMesh.name = `node_${i}`;
        stationGroup.add(nodeMesh);
      }

      modelGroup.add(stationGroup);
      setLoading(false);
    };

    // If a custom .glb is provided, load via GLTFLoader
    if (modelUrl) {
      const loader = new GLTFLoader();
      loader.load(
        modelUrl,
        (gltf) => {
          gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
                materials.push(mesh.material as THREE.MeshStandardMaterial);
              }
            }
          });

          // Scale & Center
          const box = new THREE.Box3().setFromObject(gltf.scene);
          const size = box.getSize(new THREE.Vector3());
          const maxAxis = Math.max(size.x, size.y, size.z);
          gltf.scene.scale.multiplyScalar(2.2 / maxAxis);

          const center = box.getCenter(new THREE.Vector3());
          gltf.scene.position.sub(center.multiplyScalar(2.2 / maxAxis));

          modelGroup.add(gltf.scene);
          setModelType('glb');
          setLoading(false);
        },
        undefined,
        (err) => {
          console.warn('Could not load specified .glb model, falling back to procedural 3D workstation:', err);
          buildProceduralTechStation();
        }
      );
    } else {
      buildProceduralTechStation();
    }

    // 7. ScrollTrigger Rotation Sync Implementation
    let scrollY = window.scrollY;
    let targetScrollRotationY = 0;
    let currentScrollRotationY = 0;

    const handleWindowScroll = () => {
      scrollY = window.scrollY;
      // Convert scroll into rotation radians (smooth scroll trigger factor)
      targetScrollRotationY = scrollY * 0.0032;
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    // 8. Mouse & Touch Drag Interaction (Tilt and Rotate in 3D)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragRotation = { x: 0.15, y: -0.35 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
      if (onInteract) onInteract();
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        dragRotation.y += deltaX * 0.008;
        dragRotation.x = Math.max(-0.6, Math.min(0.8, dragRotation.x + deltaY * 0.008));

        previousMousePosition = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 9. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // 10. Visibility Observer (Pause rendering when off-screen to save battery)
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    // 11. Animation Render Loop with Lerp Smoothing
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Update interactive screen texture
      updateScreenCanvas(elapsedTime);

      // Smooth scroll interpolation (ScrollTrigger effect)
      currentScrollRotationY += (targetScrollRotationY - currentScrollRotationY) * 0.08;

      if (modelGroupRef.current) {
        // Subtle floating bobbing motion
        modelGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        // Base rotation combines scroll trigger + drag tilt + optional slow idle auto-rotate
        const idleRot = autoRotate && !isDragging ? elapsedTime * 0.25 : 0;
        const finalTargetY = dragRotation.y + currentScrollRotationY + idleRot;
        const finalTargetX = dragRotation.x + Math.sin(elapsedTime * 0.8) * 0.04;

        modelGroupRef.current.rotation.y += (finalTargetY - modelGroupRef.current.rotation.y) * 0.08;
        modelGroupRef.current.rotation.x += (finalTargetX - modelGroupRef.current.rotation.x) * 0.08;

        // Animate procedural orbiting elements if present
        const ring1 = modelGroupRef.current.getObjectByName('orbitalRing1');
        if (ring1) ring1.rotation.z = elapsedTime * 0.6;

        const ring2 = modelGroupRef.current.getObjectByName('orbitalRing2');
        if (ring2) ring2.rotation.x = elapsedTime * 0.4;

        const crystal = modelGroupRef.current.getObjectByName('floatingCrystal');
        if (crystal) {
          crystal.rotation.y = elapsedTime * 1.2;
          crystal.position.y = 1.35 + Math.sin(elapsedTime * 2.2) * 0.06;
        }

        // Orbit nodes
        for (let i = 0; i < 5; i++) {
          const node = modelGroupRef.current.getObjectByName(`node_${i}`);
          if (node) {
            const angle = (i / 5) * Math.PI * 2 + elapsedTime * 0.8;
            node.position.x = Math.cos(angle) * 1.8;
            node.position.z = Math.sin(angle) * 1.8;
            node.position.y = 0.25 + Math.sin(elapsedTime * 2 + i) * 0.2;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 12. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleWindowScroll);
      domEl.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl, autoRotate]);

  // Toggle wireframe on materials
  const handleToggleWireframe = () => {
    const next = !wireframeMode;
    setWireframeMode(next);
    materialsRef.current.forEach((m) => {
      m.wireframe = next;
    });
  };

  const handleResetRotation = () => {
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.set(0.15, -0.35, 0);
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md group select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] cursor-grab active:cursor-grabbing flex items-center justify-center relative"
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20">
          <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center animate-spin">
            <Box className="w-6 h-6 text-rose-400" />
          </div>
          <span className="text-xs text-slate-300 font-semibold mt-3">৩ডি মডেল লোড হচ্ছে...</span>
        </div>
      )}

      {/* Top Floating Glassmorphism Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 text-white text-[11px] font-bold backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span>Three.js 3D Interactive Model</span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] text-amber-300 font-semibold backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>ScrollTrigger Sync</span>
        </div>
      </div>

      {/* Bottom Floating Controls Toolbar */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-auto">
        {/* Interaction Hint */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-950/80 px-2.5 py-1.5 rounded-xl border border-slate-800/80 backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="hidden sm:inline">স্ক্রোল অথবা ড্র্যাগ করে ৩৬০° ঘুরিয়ে দেখুন</span>
          <span className="sm:hidden">৩৬০° স্পর্শ করে ঘুরান</span>
        </div>

        {/* Quick Mode Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all flex items-center gap-1 ${
              autoRotate
                ? 'bg-rose-600/30 border-rose-500/50 text-rose-300'
                : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="অটো রোটেশন চালু/বন্ধ"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
            <span className="hidden md:inline">{autoRotate ? 'ঘূর্ণন: চালু' : 'ঘূর্ণন: বন্ধ'}</span>
          </button>

          <button
            onClick={handleToggleWireframe}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all flex items-center gap-1 ${
              wireframeMode
                ? 'bg-sky-600/30 border-sky-500/50 text-sky-300'
                : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="ওয়্যারফ্রেম মোড"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden md:inline">ওয়্যারফ্রেম</span>
          </button>

          <button
            onClick={handleResetRotation}
            className="p-1.5 sm:px-2 sm:py-1 rounded-xl text-xs font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all"
            title="রিসেট ভিউ"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
