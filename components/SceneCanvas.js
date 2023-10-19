"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import Model from "./Model";


export default function SceneCanvas({ source }) {

    return (
    <div className="flex justify-center items-center bg-cyan-600 border">
        <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} >
            <color attach="background" args={["#101010"]} />
            <PresentationControls speed={1.5} zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null}>
                    <Model source={source} scale={0.01} />
                </Stage>
            </PresentationControls>
        </Canvas>
    </div>
  )
}
