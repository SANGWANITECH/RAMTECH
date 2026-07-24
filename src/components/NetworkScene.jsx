import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SERVICE_NODES, FOUNDERS } from "./serviceNodes";

function useNetworkLayout() {
  return useMemo(() => {
    const founderPositions = FOUNDERS.map((_, i) => {
      const angle = (i / FOUNDERS.length) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(angle) * 1.0, Math.sin(angle) * 1.0, 0);
    });

    const servicePositions = SERVICE_NODES.map((_, i) => {
      const angle = (i / SERVICE_NODES.length) * Math.PI * 2 + 0.4;
      const radius = 2.1 + (i % 3) * 0.35;
      const height = Math.sin(i * 1.7) * 1.0;
      return new THREE.Vector3(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
    });

    const links = servicePositions.map((pos, i) => [founderPositions[i % founderPositions.length], pos]);
    founderPositions.forEach((f, i) => {
      const next = founderPositions[(i + 1) % founderPositions.length];
      links.push([f, next]);
    });

    return { founderPositions, servicePositions, links };
  }, []);
}

function Pulse({ start, end, speed, color }) {
  const ref = useRef();
  const offset = useMemo(() => Math.random(), []);

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    if (ref.current) {
      ref.current.position.lerpVectors(start, end, t);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function InteractiveNode({ position, size, color, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      scale={hovered ? 1.35 : 1}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 0.9 : 0.55} roughness={0.35} />
    </mesh>
  );
}

function Network({ onSelectNode }) {
  const group = useRef();
  const { founderPositions, servicePositions, links } = useNetworkLayout();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group ref={group}>
      {links.map(([a, b], i) => (
        <Line key={`line-${i}`} points={[a, b]} color="#2a3550" lineWidth={1} transparent opacity={0.55} />
      ))}

      {links.map(([a, b], i) => (
        <Pulse
          key={`pulse-${i}`}
          start={a}
          end={b}
          speed={0.14 + (i % 4) * 0.05}
          color={i % 3 === 0 ? "#E23B4D" : "#22D3EE"}
        />
      ))}

      {founderPositions.map((pos, i) => (
        <InteractiveNode
          key={`founder-${i}`}
          position={pos}
          size={0.15}
          color="#E23B4D"
          onSelect={() => onSelectNode({ type: "founder", ...FOUNDERS[i] })}
        />
      ))}

      {servicePositions.map((pos, i) => (
        <InteractiveNode
          key={`service-${i}`}
          position={pos}
          size={0.1}
          color="#22D3EE"
          onSelect={() => onSelectNode({ type: "service", ...SERVICE_NODES[i] })}
        />
      ))}
    </group>
  );
}

export default function NetworkScene({ onSelectNode }) {
  return (
    <Canvas
      camera={{ position: [0, 1, 5.2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#22D3EE" />
      <pointLight position={[-4, -2, -2]} intensity={0.8} color="#E23B4D" />
      <Network onSelectNode={onSelectNode} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.4}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
