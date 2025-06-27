"use client";

import React, { Suspense, useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import NeonBackground from "../components/NeonBackground";

// --- Configuration from C code ---
const BALL_RADIUS = 0.3;
const SPRING_CONST = 4; // バネ定数
const BALL_MASS = 1.0; // ボール質量
const MOVE_STEP = 0.2;
const GRAVITY = 9.8 * 0.05; // 標準的な重力加速度
const RING_RADIUS = 0.8;
const RING_THICKNESS = 0.1;
const RING_COLORS = ["red", "green", "blue", "yellow", "magenta"];
const RING_POSITIONS = [
  [0, 0.5, -7],
  [3, 0.5, -10],
  [-3, 0.5, -13],
  [0, 1.5, -16],
  [2, 2.5, -20],
];

// Ring definition
interface RingData {
  position: [number, number, number];
  color: string;
  isPassed: boolean;
}

function createInitialRings(): RingData[] {
  return RING_POSITIONS.map((pos, i) => ({
    position: pos as [number, number, number],
    color: RING_COLORS[i],
    isPassed: false,
  }));
}

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
      <meshStandardMaterial color="#cc3333" />
    </mesh>
  );
}

function Ring({ position, color, isPassed }: RingData) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <torusGeometry args={[RING_RADIUS, RING_THICKNESS, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={isPassed ? 0.1 : 1.0}
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

function SpringLine({
  ballPos,
  visible,
}: {
  ballPos: THREE.Vector3;
  visible: boolean;
}) {
  const ref = useRef<THREE.BufferGeometry>(null!);
  const points = useMemo(
    () => [new THREE.Vector3(0, 0, 0), ballPos.clone()],
    [ballPos]
  );
  useEffect(() => {
    if (ref.current) {
      ref.current.setFromPoints(points);
    }
  }, [points]);
  if (!visible) return null;
  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color="yellow" linewidth={3} />
    </line>
  );
}

function AimingLine({
  ballPos,
  visible,
}: {
  ballPos: THREE.Vector3;
  visible: boolean;
}) {
  const ref = useRef<THREE.BufferGeometry>(null!);
  const points = useMemo(
    () => [new THREE.Vector3(0, 0, 0), ballPos.clone()],
    [ballPos]
  );
  useEffect(() => {
    if (ref.current) {
      ref.current.setFromPoints(points);
    }
  }, [points]);
  if (!visible) return null;
  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineDashedMaterial color="cyan" dashSize={0.2} gapSize={0.1} />
    </line>
  );
}

// SVGアイコン
const ArrowUpIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#grad)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#b0b0ff" />
      </linearGradient>
    </defs>
    <path
      d="M12 4l6 8h-4v8h-4v-8H6z"
      stroke="#222"
      strokeWidth="0.5"
      fill="url(#grad)"
      filter="url(#shadow)"
    />
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="1"
        floodColor="#222"
        floodOpacity="0.4"
      />
    </filter>
  </svg>
);
const ArrowDownIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#grad)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#b0b0ff" />
      </linearGradient>
    </defs>
    <path
      d="M12 20l-6-8h4V4h4v8h4z"
      stroke="#222"
      strokeWidth="0.5"
      fill="url(#grad)"
      filter="url(#shadow)"
    />
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="1"
        floodColor="#222"
        floodOpacity="0.4"
      />
    </filter>
  </svg>
);
const ArrowLeftIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#grad)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#b0b0ff" />
      </linearGradient>
    </defs>
    <path
      d="M4 12l8-6v4h8v4h-8v4z"
      stroke="#222"
      strokeWidth="0.5"
      fill="url(#grad)"
      filter="url(#shadow)"
    />
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="1"
        floodColor="#222"
        floodOpacity="0.4"
      />
    </filter>
  </svg>
);
const ArrowRightIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#grad)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#b0b0ff" />
      </linearGradient>
    </defs>
    <path
      d="M20 12l-8 6v-4H4v-4h8V6z"
      stroke="#222"
      strokeWidth="0.5"
      fill="url(#grad)"
      filter="url(#shadow)"
    />
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="1"
        floodColor="#222"
        floodOpacity="0.4"
      />
    </filter>
  </svg>
);
const LaunchIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="url(#grad2)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#ff5fd2" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#grad2)" filter="url(#shadow2)" />
    <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="2"
        floodColor="#222"
        floodOpacity="0.3"
      />
    </filter>
  </svg>
);

// 発射ボタン用の特別なスタイル
const launchButtonStyle: React.CSSProperties = {
  width: 160,
  height: 56,
  border: "none",
  borderRadius: 32,
  background: "linear-gradient(90deg, #ff5fd2 0%, #7f5fff 100%)",
  color: "#fff",
  fontWeight: "bold",
  fontSize: 24,
  boxShadow: "0 4px 16px rgba(127,95,255,0.25), 0 0 0 4px #fff3",
  cursor: "pointer",
  transition: "background 0.2s, transform 0.1s",
  outline: "none",
  marginTop: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  letterSpacing: 2,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "#fff8",
  textShadow: "0 2px 8px #7f5fff88, 0 0 2px #fff",
};
const launchButtonHoverStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #7f5fff 0%, #ff5fd2 100%)",
  transform: "scale(1.06)",
  borderColor: "#fff",
};

function Game() {
  const [ballPos, setBallPos] = useState(new THREE.Vector3(0, 0, 0));
  const [isAiming, setIsAiming] = useState(true);
  const [rings, setRings] = useState<RingData[]>(createInitialRings());
  const [score, setScore] = useState(0);
  const ballVel = useRef(new THREE.Vector3(0, 0, 0));
  const isSpringActive = useRef(false);
  const initialPosOnRelease = useRef(new THREE.Vector3(0, 0, 0));
  const launchTime = useRef(-1);

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAiming) {
        if (e.key.startsWith("Arrow")) e.preventDefault();
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
              setIsAiming(false);
              isSpringActive.current = true;
              initialPosOnRelease.current.copy(newPos);
              launchTime.current = Date.now();
              return newPos;
          }
          return newPos;
        });
      } else {
        if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          resetGame();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAiming]);

  // 物理・ゲーム進行
  useFrame((_, delta) => {
    if (isAiming) return;
    const dt = Math.min(delta, 0.1);
    // 4秒経過でリセット
    if (launchTime.current > 0 && Date.now() - launchTime.current > 4000) {
      resetGame();
      return;
    }
    const newPos = ballPos.clone();
    // バネ力
    if (isSpringActive.current) {
      const springForce = new THREE.Vector3()
        .copy(newPos)
        .multiplyScalar(-SPRING_CONST / BALL_MASS);
      ballVel.current.add(springForce.multiplyScalar(dt));
      // 原点を通過したらバネ解除
      if (newPos.dot(initialPosOnRelease.current) <= 0) {
        isSpringActive.current = false;
      }
    }
    // 重力
    ballVel.current.y -= GRAVITY * dt;
    // 位置更新
    newPos.add(ballVel.current.clone().multiplyScalar(dt));
    // 空気抵抗
    ballVel.current.multiplyScalar(0.995);
    // 床との衝突
    if (newPos.y < -2.0 + BALL_RADIUS) {
      newPos.y = -2.0 + BALL_RADIUS;
      if (ballVel.current.y < 0) {
        ballVel.current.y *= -0.8;
      }
      // 速度が小さくなったら原点に戻す
      if (ballVel.current.length() < 0.1) {
        resetGame();
        return;
      }
    }
    // リング通過判定
    let ringPassed = false;
    const updatedRings = rings.map((ring, i) => {
      if (!ring.isPassed) {
        const ringPos = new THREE.Vector3().fromArray(ring.position);
        const dx = newPos.x - ringPos.x;
        const dy = newPos.y - ringPos.y;
        const dz = newPos.z - ringPos.z;
        const planeDist = Math.sqrt(dx * dx + dz * dz);
        const distToRing = Math.abs(planeDist - RING_RADIUS);
        const yDiff = Math.abs(dy);
        if (
          distToRing <= RING_THICKNESS / 2 + BALL_RADIUS &&
          yDiff <= RING_THICKNESS / 2 + BALL_RADIUS
        ) {
          ringPassed = true;
          // ここでスコアを即時加算
          setScore((s) => s + 1);
          return { ...ring, isPassed: true };
        }
      }
      return ring;
    });
    if (ringPassed) {
      setRings(updatedRings);
    }
    setBallPos(newPos);
  });

  function resetGame() {
    setBallPos(new THREE.Vector3(0, 0, 0));
    ballVel.current.set(0, 0, 0);
    setIsAiming(true);
    isSpringActive.current = false;
    launchTime.current = -1;
    // setRings(createInitialRings()); // リングの透明状態を維持
    // setScore(0); // スコアもリセットしない
  }

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 18]} intensity={1} />
      <Floor />
      <Ball position={ballPos} />
      {rings.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
      {/* バネ線 */}
      <SpringLine ballPos={ballPos} visible={isSpringActive.current} />
      {/* 照準線 */}
      <AimingLine
        ballPos={ballPos}
        visible={isAiming && ballPos.length() > 0}
      />
      {/* スコア表示 */}
      <Text
        position={[0, -1.9, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {score >= rings.length
          ? "GAME CLEAR"
          : `SCORE: ${score} / ${rings.length}`}
      </Text>
      <OrbitControls />
    </>
  );
}

export default function MinigamePage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ルール説明文
  const ruleText = (
    <div
      style={{
        position: isMobile ? undefined : "absolute",
        top: isMobile ? undefined : "0%",
        left: isMobile ? undefined : "20px",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "14px",
        maxWidth: 320,
        margin: isMobile ? "0px auto 0 auto" : "60px auto 0 auto",
        width: isMobile ? "90%" : undefined,
      }}
    >
      <h2 style={{ margin: 0, marginBottom: "10px", fontSize: "16px" }}>
        ルール説明
      </h2>
      <p style={{ margin: "4px 0" }}>ボールを打ち出して、リングを狙おう！</p>
      <p style={{ margin: "4px 0" }}>平面ボタンで前後左右を調整</p>
      <p style={{ margin: "4px 0" }}>高さボタンで高さを調整</p>
      <p style={{ margin: "4px 0" }}>発射ボタンで発射！</p>
    </div>
  );

  // キーイベントを発火する関数
  const fireKey = (key: string) => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key }));
  };

  // 右側の操作ボタン
  const controlPanel = (
    <div
      style={{
        position: isMobile ? undefined : "absolute",
        top: isMobile ? undefined : "50%",
        right: isMobile ? undefined : "40px",
        transform: isMobile ? undefined : "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "20px 16px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        gap: 12,
        minWidth: isMobile ? undefined : 120,
        margin: isMobile ? "24px auto" : undefined,
        width: isMobile ? "90%" : undefined,
        justifyContent: isMobile ? "center" : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div style={{ color: "#a78bfa", marginBottom: 2, fontSize: 20 }}>
          平面
        </div>
        <button
          onClick={() => fireKey("ArrowUp")}
          style={{ width: 40, height: 40, marginBottom: 4 }}
        >
          {ArrowUpIcon}
        </button>
        <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <button
            onClick={() => fireKey("ArrowLeft")}
            style={{ width: 40, height: 40 }}
          >
            {ArrowLeftIcon}
          </button>
          <button
            onClick={() => fireKey("ArrowRight")}
            style={{ width: 40, height: 40 }}
          >
            {ArrowRightIcon}
          </button>
        </div>
        <button
          onClick={() => fireKey("ArrowDown")}
          style={{ width: 40, height: 40, marginTop: 4 }}
        >
          {ArrowDownIcon}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "column",
          alignItems: "center",
          gap: 4,
          marginTop: 16,
        }}
      >
        <div style={{ color: "#a78bfa", marginBottom: 2, fontSize: 20 }}>
          高さ
        </div>
        <button onClick={() => fireKey("h")} style={{ width: 40, height: 40 }}>
          {ArrowUpIcon}
        </button>
        <button onClick={() => fireKey("l")} style={{ width: 40, height: 40 }}>
          {ArrowDownIcon}
        </button>
      </div>
      <button onClick={() => fireKey("Enter")} style={launchButtonStyle}>
        <span>発射！</span>
      </button>
    </div>
  );

  return isMobile ? (
    <div
      className="w-screen min-h-screen text-white flex flex-col items-center"
      style={{ overflowY: "auto", height: "100vh" }}
    >
      <NeonBackground />
      {ruleText}
      <div
        style={{
          width: "100%",
          height: 260,
          maxWidth: 400,
          margin: "2px auto 0 auto",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Canvas
          camera={{ position: [0, 5, 18], fov: 45 }}
          gl={{ alpha: true }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Suspense fallback={null}>
            <Game />
          </Suspense>
        </Canvas>
      </div>
      <div style={{ marginBottom: 8, width: "100%" }}>{controlPanel}</div>
    </div>
  ) : (
    <div className="w-screen h-screen text-white">
      <NeonBackground />
      {ruleText}
      {controlPanel}
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
