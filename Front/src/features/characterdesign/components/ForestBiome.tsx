import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { CanvasTexture, RepeatWrapping, type Group } from "three";

type TreeInfo = {
  x: number;
  z: number;
  scale: number;
  pine: boolean;
  tint: string;
};

function Tree({
  x,
  z,
  scale,
  pine,
  tint,
  treeRef,
}: TreeInfo & { treeRef?: (group: Group | null) => void }) {
  return (
    <group ref={treeRef} position={[x, -1.2, z]} scale={scale}>
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.14, 0.9, 6]} />
        <meshStandardMaterial color="#5a3a22" roughness={0.95} />
      </mesh>

      {pine ? (
        <>
          <mesh position={[0, 1.05, 0]} castShadow>
            <coneGeometry args={[0.55, 1.1, 7]} />
            <meshStandardMaterial color={tint} flatShading roughness={0.9} />
          </mesh>
          <mesh position={[0, 1.55, 0]} castShadow>
            <coneGeometry args={[0.4, 0.9, 7]} />
            <meshStandardMaterial color={tint} flatShading roughness={0.9} />
          </mesh>
        </>
      ) : (
        <mesh position={[0, 1.35, 0]} castShadow>
          <icosahedronGeometry args={[0.62, 0]} />
          <meshStandardMaterial color={tint} flatShading roughness={0.9} />
        </mesh>
      )}
    </group>
  );
}

function TreeLayer({
  count,
  z,
  spread,
  speed,
  tints,
}: {
  count: number;
  z: number;
  spread: number;
  speed: number;
  tints: string[];
}) {
  const trees = useRef<(Group | null)[]>([]);

  const data = useMemo<TreeInfo[]>(
    () =>
      Array.from({ length: count }, (_, index) => ({
        x: -spread / 2 + (index / count) * spread + (Math.random() - 0.5) * 1.6,
        z: z + (Math.random() - 0.5) * 1.4,
        scale: 0.75 + Math.random() * 0.6,
        pine: Math.random() > 0.45,
        tint: tints[index % tints.length],
      })),
    [count, spread, tints, z],
  );

  useFrame((_, delta) => {
    trees.current.forEach((tree, index) => {
      if (!tree) return;

      // World scrolls opposite the runner: left and away into the distance.
      tree.position.x -= speed * delta;
      tree.position.z -= speed * 0.32 * delta;

      if (tree.position.x < -spread / 2) tree.position.x += spread;
      if (tree.position.z < data[index].z - 5) tree.position.z += 5;
    });
  });

  return (
    <group>
      {data.map((tree, index) => (
        <Tree
          key={index}
          {...tree}
          treeRef={(group) => {
            trees.current[index] = group;
          }}
        />
      ))}
    </group>
  );
}

function GrassGround() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "#5f8f45";
      context.fillRect(0, 0, 128, 128);
      for (let i = 0; i < 180; i += 1) {
        context.strokeStyle = Math.random() > 0.5 ? "#79ad5d" : "#4b7838";
        context.lineWidth = 1 + Math.random();
        const x = Math.random() * 128;
        const y = Math.random() * 128;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + (Math.random() - 0.5) * 5, y - 4 - Math.random() * 7);
        context.stroke();
      }
    }

    const map = new CanvasTexture(canvas);
    map.wrapS = RepeatWrapping;
    map.wrapT = RepeatWrapping;
    map.repeat.set(18, 12);
    return map;
  }, []);

  useFrame((_, delta) => {
    texture.offset.x += delta * 0.16;
    texture.offset.y -= delta * 0.055;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, -5]} receiveShadow>
      <planeGeometry args={[90, 55]} />
      <meshStandardMaterial map={texture} color="#ffffff" roughness={1} />
    </mesh>
  );
}

export default function ForestBiome() {
  return (
    <group>
      <GrassGround />

      {/* soft hills */}
      <mesh position={[-9, -1.3, -22]} scale={[8, 2.2, 1]}>
        <sphereGeometry args={[1, 16, 12]} />
        <meshStandardMaterial color="#6f9a5b" roughness={1} />
      </mesh>
      <mesh position={[7, -1.4, -24]} scale={[10, 2.6, 1]}>
        <sphereGeometry args={[1, 16, 12]} />
        <meshStandardMaterial color="#79a865" roughness={1} />
      </mesh>

      <TreeLayer
        count={12}
        z={-12}
        spread={38}
        speed={0.9}
        tints={["#5d8a52", "#6b9459"]}
      />
      <TreeLayer
        count={14}
        z={-6.5}
        spread={30}
        speed={1.9}
        tints={["#4f7f43", "#5f8f4b", "#719c55"]}
      />
      <TreeLayer
        count={12}
        z={-2.4}
        spread={24}
        speed={3.1}
        tints={["#416e38", "#537f3e"]}
      />

      {/* sun */}
      <mesh position={[7, 8, -18]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshBasicMaterial color="#fff1b8" />
      </mesh>
    </group>
  );
}
