import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Images() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.25],
    [1, 1.3, 1.2, 1]
  );
  const rotateThird = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);

  return (
    <section className="">
      <div ref={targetRef} className="h-[50vh] w-full">
        <div className="top-[10vh] flex flex-col gap-28 items-start">
          <div className="w-full">
            <motion.div style={{ rotate: rotateThird }} className="origin-top">
              <img
                className="h-[75vh] max-h-[80vw] w-auto"
                src="/mini.png"
              ></img>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}