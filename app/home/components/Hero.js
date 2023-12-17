import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
    // container: , // by default is the current window
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // fade out a section
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={targetRef}
      className="relative h-screen w-screen justify-center"
    >
      <motion.div
        style={{ scale, position: position }}
        className="top-[15%] left-[35%] flex flex-col text-center items-center "
      >
        {/* A possibility: */}
        <div>
          <div className="text-8xl text-black tracking-tighter ">MA<span className="">TT</span>EO</div>
          <br />
          <div className="text-8xl text-black tracking-tighter">
            <span className=" italic">J</span>UST
          </div>
        </div>

        {/* A different possibility
        <div>

        </div> */}

      </motion.div>
    </motion.section>
  );
}
