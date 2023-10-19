"use client";
import SceneCanvas from "../components/SceneCanvas";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex flex-col justify-between h-screen">
      <div className="flex justify-between h-1/4">
        <div>Home About</div>
        <div className="">Matteo Just</div>
      </div>

      <div className="h-2/4 grid grid-cols-4">
        <SceneCanvas source={"/bmw_m4"} />
        <SceneCanvas source={"/mini.glb"} />
        <SceneCanvas source={"/rossa.glb"} />
        <SceneCanvas source={"/yacht.glb"} />
      </div>

      <div className="h-1/4">Description</div>
      <div className="flex flex-col gap-5">
        <div className="h-screen bg-orange-500"></div>
        <div className="h-screen bg-orange-500"></div>
      </div>
    </main>
  );
}
