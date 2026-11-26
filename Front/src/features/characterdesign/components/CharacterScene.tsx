import { ContactShadows, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CharacterModel from "./CharacterModel";
import ForestBiome from "./ForestBiome";

// The runner travels toward +X / +Z and lower Y; yaw follows that heading.
const RUN_YAW = Math.atan2(2.5 - -12, 1.8 - -11);

function Runner() {
  return (
    <group position={[-2.8, 0, 0]} rotation={[0, RUN_YAW, 0]}>
      <CharacterModel scale={1.1} position={[0, -1.15, 0]} facing={0} />
      <ContactShadows
        position={[0, -1.18, 0]}
        opacity={0.45}
        scale={5}
        blur={2.5}
        far={3}
        color="#253b1c"
      />
      <Sparkles
        position={[0, 0, 0]}
        count={45}
        scale={[10, 4, 6]}
        size={2}
        speed={0.25}
        color="#e8e36b"
      />
    </group>
  );
}

export default function CharacterScene() {
  return (
    <Canvas shadows dpr={[1, 1.75]} camera={{ position: [0, 1.4, 7], fov: 42 }}>
      <color attach="background" args={["#a8d5a2"]} />
      <fog attach="fog" args={["#a8d5a2", 12, 40]} />

      <ambientLight intensity={0.85} color="#dff0c4" />
      <directionalLight
        position={[4, 8, 6]}
        intensity={2.1}
        color="#fff1c9"
        castShadow
      />
      <pointLight position={[-4, 3, -2]} intensity={12} color="#b6d9a0" />

      <ForestBiome />
      <Runner />
    </Canvas>
  );
}
