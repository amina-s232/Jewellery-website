"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

type JewelryModelProps = {
  modelPath?: string;
};

function JewelryModel({ modelPath = "/models/ring.glb" }: JewelryModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

useGLTF.preload("/models/ring.glb");

export default function JewelryModelViewer({
  modelPath = "/models/ring.glb",
}: JewelryModelProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 2.2], fov: 35 }}
      className="h-[260px] w-full rounded-3xl bg-[#111111]"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <spotLight
          position={[2, 5, 2]}
          angle={0.4}
          penumbra={0.5}
          intensity={1.2}
          castShadow
        />
        <directionalLight
          position={[-2, 2, -2]}
          intensity={0.4}
          color="#ffe4c4"
        />
        <JewelryModel modelPath={modelPath} />
        <Environment preset="studio" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Suspense>
    </Canvas>
  );
}

