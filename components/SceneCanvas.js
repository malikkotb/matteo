"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import Model from "./Model";

export default function SceneCanvas({ source }) {
  return (
    <div className="flex justify-center items-center bg-cyan-600">
      {/* <Canvas className="">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Model source={source} />
            </Suspense>
        </Canvas> */}

      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" />
        <OrbitControls
          autoRotate
          zoom0={0.5}
          enableZoom={false}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        / >
          <Stage environment={null}>
            <Model source={source} scale={0.01} />
          </Stage>
      </Canvas>
    </div>
  );
}
