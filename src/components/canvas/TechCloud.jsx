import React, { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Fibonacci sphere: spreads N points evenly on a sphere of the given radius.
const spherePoints = (count, radius) => {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
};

// One texture per technology: white "coin" + ring + logo drawn together on a
// canvas, so a chip is a single sprite (no sorting issues between coin and logo).
const makeChipTexture = (image, active) => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const c = size / 2;
  ctx.beginPath();
  ctx.arc(c, c, c - 2, 0, Math.PI * 2);
  ctx.fillStyle = active ? "#915EFF" : "rgba(223, 217, 255, 0.55)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(c, c, c - 18, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  if (image && image.width) {
    const logo = size * 0.56;
    ctx.drawImage(image, c - logo / 2, c - logo / 2, logo, logo);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  return tex;
};

const LogoChip = ({ position, texture, textureActive, name, hovered, onHover }) => {
  const group = useRef();
  const active = hovered === name;

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = active ? 1.45 : 1;
    const s = group.current.scale.x + (target - group.current.scale.x) * Math.min(delta * 8, 1);
    group.current.scale.set(s, s, s);
  });

  return (
    <group ref={group} position={position}>
      {/* a sprite always faces the camera */}
      <sprite
        scale={[1.3, 1.3, 1]}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(name);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          onHover(null);
          document.body.style.cursor = "auto";
        }}
      >
        <spriteMaterial map={active ? textureActive : texture} transparent toneMapped={false} />
      </sprite>
      {active && (
        <Html center position={[0, -1, 0]} zIndexRange={[10, 0]}>
          <span className='pointer-events-none whitespace-nowrap bg-[#915EFF] text-white text-[13px] font-semibold px-3 py-1 rounded-full shadow-lg'>
            {name}
          </span>
        </Html>
      )}
    </group>
  );
};

const Core = () => {
  const outer = useRef();
  const inner = useRef();
  useFrame((state, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.25;
      outer.current.rotation.x += delta * 0.1;
    }
    if (inner.current) {
      const p = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.06;
      inner.current.scale.set(p, p, p);
    }
  });
  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial color='#915EFF' wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color='#915EFF'
          emissive='#915EFF'
          emissiveIntensity={1.6}
          toneMapped={false}
        />
      </mesh>
      <pointLight color='#915EFF' intensity={2} distance={8} />
    </group>
  );
};

const Cloud = ({ items }) => {
  const logos = useTexture(items.map((t) => t.icon));
  const chips = useMemo(
    () => logos.map((t) => ({
      normal: makeChipTexture(t.image, false),
      active: makeChipTexture(t.image, true),
    })),
    [logos]
  );
  const [hovered, setHovered] = useState(null);
  const group = useRef();
  const points = useMemo(() => spherePoints(items.length, 3.4), [items.length]);

  useFrame((_, delta) => {
    if (group.current && !hovered) group.current.rotation.y += delta * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={group}>
        <Core />
        {items.map((item, i) => (
          <LogoChip
            key={item.name}
            name={item.name}
            position={points[i]}
            texture={chips[i].normal}
            textureActive={chips[i].active}
            hovered={hovered}
            onHover={setHovered}
          />
        ))}
      </group>
    </Float>
  );
};

const TechCloudCanvas = ({ items }) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 11], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={0.8} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
        <Cloud items={items} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TechCloudCanvas;
