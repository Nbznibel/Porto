import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, type Group } from "three";

type Props = {
  animated?: boolean;
  scale?: number;
  position?: [number, number, number];
  facing?: number;
};

const ARMOR = "#b0c9a721";
const ARMOR_DARK = "#b0c9a721";
const STEEL = "#c1dbbe9a";
const GOLD = "#c9a227";
const LEATHER = "#5a3a22";
const CAPE = "#8f3d2f";
const SKIN = "#d8b48a";

/** Low-poly armored runner built from primitives — no external model file. */
export default function CharacterModel({
  animated = true,
  scale = 1,
  position = [0, 0, 0],
  facing = Math.PI / 2,
}: Props) {
  const leftLeg = useRef<Group>(null);
  const rightLeg = useRef<Group>(null);
  const leftArm = useRef<Group>(null);
  const rightArm = useRef<Group>(null);
  const cape = useRef<Group>(null);
  const body = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!animated) return;

    const t = clock.elapsedTime * 9;
    const stride = Math.sin(t);

    if (leftLeg.current) leftLeg.current.rotation.x = stride * 0.85;
    if (rightLeg.current) rightLeg.current.rotation.x = -stride * 0.85;
    if (leftArm.current) leftArm.current.rotation.x = -stride * 0.6 - 0.35;
    if (rightArm.current) rightArm.current.rotation.x = stride * 0.55 - 0.2;
    if (body.current) body.current.position.y = Math.abs(Math.sin(t)) * 0.09;
    if (cape.current) {
      cape.current.rotation.x = -0.16 + Math.sin(t * 0.55) * 0.1;
      cape.current.rotation.z = Math.sin(t * 0.4) * 0.05;
    }
  });

  return (
    <group position={position} rotation={[0, facing, 0]} scale={scale}>
      <group ref={body}>
        {/* torso + chest plate */}
        <mesh position={[0, 1.28, 0]} castShadow>
          <capsuleGeometry args={[0.27, 0.42, 6, 12]} />
          <meshStandardMaterial color={ARMOR_DARK} metalness={0.4} roughness={0.55} />
        </mesh>
        <mesh position={[0, 1.32, 0.15]} castShadow>
          <boxGeometry args={[0.52, 0.52, 0.16]} />
          <meshStandardMaterial color={ARMOR} metalness={0.65} roughness={0.35} />
        </mesh>
        <mesh position={[0, 1.32, 0.25]}>
          <boxGeometry args={[0.1, 0.32, 0.03]} />
          <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
        </mesh>

        {/* belt */}
        <mesh position={[0, 0.98, 0]}>
          <boxGeometry args={[0.58, 0.12, 0.42]} />
          <meshStandardMaterial color={LEATHER} roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.98, 0.23]}>
          <boxGeometry args={[0.14, 0.12, 0.04]} />
          <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.3} />
        </mesh>

        {/* helmet */}
        <group position={[0, 1.84, 0]}>
          <mesh>
            <sphereGeometry args={[0.19, 16, 16]} />
            <meshStandardMaterial color={SKIN} roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.06, 0]} castShadow>
            <coneGeometry args={[0.23, 0.36, 10]} />
            <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.04, 0.2]}>
            <boxGeometry args={[0.3, 0.07, 0.05]} />
            <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.29, -0.03]} rotation={[0.35, 0, 0]}>
            <coneGeometry args={[0.07, 0.3, 6]} />
            <meshStandardMaterial color={CAPE} roughness={0.85} />
          </mesh>
        </group>

        {/* pauldrons */}
        <mesh position={[-0.37, 1.52, 0]} castShadow>
          <sphereGeometry args={[0.16, 10, 10]} />
          <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.35} />
        </mesh>
        <mesh position={[0.37, 1.52, 0]} castShadow>
          <sphereGeometry args={[0.16, 10, 10]} />
          <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.35} />
        </mesh>

        {/* sword arm */}
        <group ref={leftArm} position={[-0.38, 1.5, 0]} rotation={[animated ? 0 : -0.35, 0, 0]}>
          <mesh position={[0, -0.26, 0]} castShadow>
            <capsuleGeometry args={[0.095, 0.3, 6, 10]} />
            <meshStandardMaterial color={ARMOR} metalness={0.55} roughness={0.45} />
          </mesh>
          <mesh position={[0, -0.53, 0]} castShadow>
            <boxGeometry args={[0.17, 0.2, 0.17]} />
            <meshStandardMaterial color={STEEL} metalness={0.75} roughness={0.3} />
          </mesh>
          <group position={[0, -0.56, 0.08]}>
            <mesh position={[0, 0, 0.47]} castShadow>
              <boxGeometry args={[0.07, 0.03, 0.88]} />
              <meshStandardMaterial
                color="#e7eef0"
                metalness={0.9}
                roughness={0.18}
                emissive="#5d7280"
                emissiveIntensity={0.25}
              />
            </mesh>
            <mesh position={[0, 0, 0.08]}>
              <boxGeometry args={[0.3, 0.06, 0.07]} />
              <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
            </mesh>
            <mesh position={[0, 0, -0.07]}>
              <boxGeometry args={[0.08, 0.08, 0.18]} />
              <meshStandardMaterial color={LEATHER} roughness={0.8} />
            </mesh>
          </group>
        </group>

        {/* shield arm */}
        <group ref={rightArm} position={[0.38, 1.5, 0]} rotation={[animated ? 0 : -0.2, 0, 0]}>
          <mesh position={[0, -0.26, 0]} castShadow>
            <capsuleGeometry args={[0.095, 0.3, 6, 10]} />
            <meshStandardMaterial color={ARMOR} metalness={0.55} roughness={0.45} />
          </mesh>
          <mesh position={[0, -0.53, 0]} castShadow>
            <boxGeometry args={[0.17, 0.2, 0.17]} />
            <meshStandardMaterial color={STEEL} metalness={0.75} roughness={0.3} />
          </mesh>
          <group position={[0, -0.5, 0.18]} rotation={[0, 0, -0.12]}>
            <mesh castShadow>
              <boxGeometry args={[0.46, 0.6, 0.08]} />
              <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.05]} castShadow>
              <boxGeometry args={[0.38, 0.52, 0.05]} />
              <meshStandardMaterial color={ARMOR_DARK} metalness={0.5} roughness={0.5} />
            </mesh>
            <mesh position={[0, 0, 0.09]}>
              <boxGeometry args={[0.08, 0.34, 0.03]} />
              <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
            </mesh>
            <mesh position={[0, 0, 0.09]}>
              <boxGeometry args={[0.26, 0.08, 0.03]} />
              <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
            </mesh>
          </group>
        </group>

        {/* legs */}
        <group ref={leftLeg} position={[-0.16, 0.9, 0]} rotation={[animated ? 0 : 0.22, 0, 0]}>
          <mesh position={[0, -0.3, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.3, 6, 10]} />
            <meshStandardMaterial color={ARMOR_DARK} metalness={0.45} roughness={0.55} />
          </mesh>
          <mesh position={[0, -0.66, 0.02]} castShadow>
            <boxGeometry args={[0.22, 0.32, 0.22]} />
            <meshStandardMaterial color={ARMOR} metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.86, 0.08]} castShadow>
            <boxGeometry args={[0.24, 0.13, 0.36]} />
            <meshStandardMaterial color={LEATHER} roughness={0.8} />
          </mesh>
        </group>

        <group ref={rightLeg} position={[0.16, 0.9, 0]} rotation={[animated ? 0 : -0.12, 0, 0]}>
          <mesh position={[0, -0.3, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.3, 6, 10]} />
            <meshStandardMaterial color={ARMOR_DARK} metalness={0.45} roughness={0.55} />
          </mesh>
          <mesh position={[0, -0.66, 0.02]} castShadow>
            <boxGeometry args={[0.22, 0.32, 0.22]} />
            <meshStandardMaterial color={ARMOR} metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.86, 0.08]} castShadow>
            <boxGeometry args={[0.24, 0.13, 0.36]} />
            <meshStandardMaterial color={LEATHER} roughness={0.8} />
          </mesh>
        </group>

        {/* cape */}
        <group ref={cape} position={[0, 1.6, -0.24]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.25} />
          </mesh>
          <mesh position={[0, -0.52, -0.06]} rotation={[0.14, 0, 0]} castShadow>
            <planeGeometry args={[0.64, 1.05, 1, 6]} />
            <meshStandardMaterial color={CAPE} side={DoubleSide} roughness={0.85} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
