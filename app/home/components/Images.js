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
  const rotateFirst = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);
  const rotateSecond = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);
  const rotateThird = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);
  const rotateFourth = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);
  const rotateFifth = useTransform(scrollYProgress, [0, 0.25], [-10, 5]);

  return (
    <section className="mt-[-30vh]">
      <div ref={targetRef} className="h-[300vh] w-full">
        <div className="top-[10vh] flex flex-col gap-28 items-start">
          <div className="w-full">
            <motion.div
              style={{ rotate: rotateFirst }}
              className=" ml-[-20px] origin-top"
            >
              <img
                className="h-[50vh] max-h-[25vw] w-auto"
                src="/aito.png"
              ></img>
            </motion.div>
          </div>
          <div className="w-full flex justify-end">
            <motion.div style={{ rotate: rotateSecond }} className="origin-top">
              <img
                className="h-[50vh] max-h-[25vw] w-auto"
                src="/yacht.png"
              ></img>
            </motion.div>
          </div>
          <div className="w-full">
            <motion.div style={{ rotate: rotateThird }} className="origin-top">
              <img
                className="h-[75vh] max-h-[80vw] w-auto"
                src="/mini.png"
              ></img>
            </motion.div>
          </div>
          <div className="w-full flex justify-end">
            <motion.div style={{ rotate: rotateFourth }} className="origin-top">
              <img
                className="h-[20vh] max-h-[25vw] w-auto"
                src="/opel.png"
              ></img>
            </motion.div>
          </div>
          <div className="w-full">
            <motion.div style={{ rotate: rotateFifth }} className="origin-top">
              <img
                className="h-[50vh] max-h-[25vw] w-auto"
                src="/miniJam.png"
              ></img>
            </motion.div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
