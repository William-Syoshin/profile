"use client";

import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import NeonBackground from "../components/NeonBackground";

// --- Configuration from C code ---
const BALL_RADIUS = 0.3;
const MOVE_STEP = 0.2;

// Ring definition
interface RingData {
  position: [number, number, number];
  color: string;
  isPassed: boolean;
}

const initialRingsData: RingData[] = [
  { position: [0, 0.5, -7], color: "red", isPassed: false },
  { position: [3, 0.5, -10], color: "green", isPassed: false },
  { position: [-3, 0.5, -13], color: "blue", isPassed: false },
  { position: [0, 1.5, -16], color: "yellow", isPassed: false },
  { position: [2, 2.5, -20], color: "magenta", isPassed: false },
];

// --- Components ---

function Ball({ position }: { position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null!);
  // The ball's position is now controlled by the game state,
  // so we just update its position on each frame.
  useFrame(() => {
    if (ref.current) {
      ref.current.position.copy(position);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[BALL_RADIUS, 32, 32]} />
      <meshStandardMaterial color="#ff4444" />
    </mesh>
  );
}

function Ring({ position, color, isPassed }: RingData) {
  const ringRadius = 0.8;
  const ringThickness = 0.3;
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <torusGeometry args={[ringRadius, ringThickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={isPassed ? 0.3 : 1.0}
      />
    </mesh>
  );
}

function Floor() {
  return (
    <mesh position={[0, -2.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[3, 64]} />
      <meshStandardMaterial color="#808080" />
    </mesh>
  );
}

function AimingLine({
  start,
  end,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
}) {
  const ref = useRef<THREE.Line>(null!);
  useFrame(() => {
    if (ref.current) {
      const points = [start, end];
      const positions = new Float32Array(points.flatMap((p) => p.toArray()));
      ref.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      ref.current.geometry.computeBoundingSphere();
    }
  });

  return (
    <line ref={ref as any}>
      <bufferGeometry />
      <lineBasicMaterial color="cyan" transparent opacity={0.7} />
    </line>
  );
}

function Game() {
  const [ballPos, setBallPos] = useState(new THREE.Vector3(0, 0, 0));
  const ballVel = useRef(new THREE.Vector3(0, 0, 0));

  const [isAiming, setIsAiming] = useState(true);
  const isSpringActive = useRef(false);
  const initialPosOnRelease = useRef(new THREE.Vector3(0, 0, 0));
  const launchTime = useRef(-1);

  const [currentRings, setCurrentRings] = useState<RingData[]>(
    JSON.parse(JSON.stringify(initialRingsData))
  );
  const [score, setScore] = useState(0);

  const resetGame = React.useCallback(() => {
    setBallPos(new THREE.Vector3(0, 0, 0));
    ballVel.current.set(0, 0, 0);
    setIsAiming(true);
    isSpringActive.current = false;
    launchTime.current = -1;
    setCurrentRings(JSON.parse(JSON.stringify(initialRingsData)));
    setScore(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAiming) {
        // 矢印キーによるページのスクロールを防止
        if (e.key.startsWith("Arrow")) {
          e.preventDefault();
        }

        setBallPos((prev) => {
          const newPos = prev.clone();
          switch (e.key) {
            case "ArrowLeft":
              newPos.x -= MOVE_STEP;
              break;
            case "ArrowRight":
              newPos.x += MOVE_STEP;
              break;
            case "ArrowUp":
              newPos.z -= MOVE_STEP;
              break;
            case "ArrowDown":
              newPos.z += MOVE_STEP;
              break;
            case "h":
            case "H":
              newPos.y += MOVE_STEP;
              break;
            case "l":
            case "L":
              newPos.y -= MOVE_STEP;
              break;
            case "o":
            case "O":
              newPos.set(0, 0, 0);
              break;
            case "r":
            case "R":
              resetGame();
              return prev;
            case "Enter":
              if (newPos.length() > 0) {
                // Cannot launch from origin
                setIsAiming(false);
                isSpringActive.current = true;
                initialPosOnRelease.current.copy(newPos);
                launchTime.current = Date.now();
              }
              return prev; // No position change on Enter
          }
          return newPos;
        });
      } else {
        if (e.key === "r" || e.key === "R") {
          e.preventDefault(); // リセット時もデフォルト動作を防止
          resetGame();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAiming, resetGame]);

  useFrame((_, delta) => {
    if (isAiming) return;

    const dt = Math.min(delta, 0.1);

    if (launchTime.current > 0 && Date.now() - launchTime.current > 4000) {
      resetGame();
      return;
    }

    const newPos = ballPos.clone();

    if (isSpringActive.current) {
      const springForce = new THREE.Vector3().copy(newPos).multiplyScalar(-0.9);
      ballVel.current.add(springForce.multiplyScalar(dt));
      if (newPos.dot(initialPosOnRelease.current) <= 0) {
        isSpringActive.current = false;
      }
    }

    ballVel.current.y -= 9.8 * dt * 0.01;
    newPos.add(ballVel.current.clone().multiplyScalar(dt));
    ballVel.current.multiplyScalar(0.995);

    if (newPos.y < -2.0 + BALL_RADIUS) {
      newPos.y = -2.0 + BALL_RADIUS;
      if (ballVel.current.y < 0) {
        ballVel.current.y *= -0.8;
      }
    }

    if (
      newPos.y.toFixed(2) === (-2.0 + BALL_RADIUS).toFixed(2) &&
      ballVel.current.length() < 0.1
    ) {
      resetGame();
      return;
    }

    const updatedRings = [...currentRings];
    let scoreUpdated = false;
    updatedRings.forEach((ring, i) => {
      if (!ring.isPassed) {
        const ringPos = new THREE.Vector3().fromArray(ring.position);
        const dx = newPos.x - ringPos.x;
        const dy = newPos.y - ringPos.y;
        const dz = newPos.z - ringPos.z;
        const planeDist = Math.sqrt(dx * dx + dz * dz);
        const distToRing = Math.abs(planeDist - 0.8);
        const yDiff = Math.abs(dy);

        if (
          distToRing <= 0.3 / 2 + BALL_RADIUS &&
          yDiff <= 0.3 / 2 + BALL_RADIUS
        ) {
          updatedRings[i].isPassed = true;
          setScore((s) => s + 1);
          scoreUpdated = true;
        }
      }
    });

    if (scoreUpdated) {
      setCurrentRings(updatedRings);
    }

    setBallPos(newPos);
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 18]} intensity={1} />
      <Floor />
      <Ball position={ballPos} />
      {currentRings.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
      {isAiming && ballPos.length() > 0 && (
        <AimingLine start={new THREE.Vector3(0, 0, 0)} end={ballPos} />
      )}
      <Text
        position={[0, -1.9, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {score >= initialRingsData.length
          ? "GAME CLEAR"
          : `SCORE: ${score} / ${initialRingsData.length}`}
      </Text>
      <OrbitControls />
    </>
  );
}

export default function MinigamePage() {
  return (
    <div className="w-screen h-screen text-white">
      <NeonBackground />
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        <h2 style={{ margin: 0, marginBottom: "10px", fontSize: "16px" }}>
          操作方法
        </h2>
        <p style={{ margin: "4px 0" }}>矢印キー: 照準の移動</p>
        <p style={{ margin: "4px 0" }}>H / L: 照準の高さ移動</p>
        <p style={{ margin: "4px 0" }}>O: 照準を原点へ</p>
        <p style={{ margin: "4px 0" }}>Enter: 発射</p>
        <p style={{ margin: "4px 0" }}>R: リセット</p>
        <p style={{ margin: "4px 0" }}>マウス右ドラッグ: 視点回転</p>
      </div>
      <Canvas
        camera={{ position: [0, 5, 18], fov: 45 }}
        gl={{ alpha: true }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Suspense fallback={null}>
          <Game />
        </Suspense>
      </Canvas>
    </div>
  );
}
