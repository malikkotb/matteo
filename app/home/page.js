"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Images from "./components/Images";
import Projects from "./components/Projects"

export default function page() {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 3500);
  }, []);

  return (
    <>
      {/* TODO: Header with Menu and Footer */}
      {/* TODO: animate page transtition on reveal kind of; fade the blue screen out once the animation is finished */}
      {animating && <Loader />}
      {!animating && (
        <main>
          <Hero />
          <div className="relative z-10 w-full">
            <Images />
            <Projects />
          </div>
        </main>
      )}
    </>
  );
}
