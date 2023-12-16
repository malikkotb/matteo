"use client";
import AnimateCOunter from "@/components/AnimateCOunter";
import Counter from "@/components/Counter";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function page() {
  const targetRef = useRef(null);
  const [animating, setAnimating] = useState(true);

  useEffect

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
    // container: , // by default is the current window
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]) // fully fade out a section

  return (
    <>
       <div className="h-screen w-screen bg-[#011EF5] text-center items-center flex">
        <AnimateCOunter />
      </div>
      {/* TODO: animate page transtition on reveal kind of; fade the blue screen out once the animation is finished */}
      <motion.section style={{opacity: opacity}} ref={targetRef} className="h-screen w-screen justify-center relative">
        <div className="absolute top-[35%] flex flex-col text-center items-center ">
          <div className="text-8xl text-black tracking-tighter ">MATTEEO</div>
          <br />
          <div className="text-8xl text-black tracking-tighter">
            <span className=" italic">J</span>UST
          </div>
        </div>
        {/* <div className="absolute h-40 z-10 bg-red-400 w-20"></div> */}
      </motion.section>
      <section className="bg-yellow-200 h-screen w-screen justify-center relative">
        hi
      </section>
    </>
  );
}
