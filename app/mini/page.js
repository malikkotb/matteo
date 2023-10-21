"use client";
import SceneCanvas from "../../components/SceneCanvas";
import gsap from "gsap";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import styles from "./page.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function page() {
  const imageContainer = useRef(null);
  const pinContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        pin: pinContainerRef.current,
      });
    });

    return () => ctx.revert();
  }, []);

  const phrase =
    "The Modern Mini - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more orless normal distribution of letters.";

  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div>
      <div className="w-screen h-[30vh] bg-black grid place-content-center">
        <div className=" text-4xl text-white">Mini 2023</div>
      </div>

      <div
        ref={imageContainer}
        className="flex bg-black"
      >
        <div className="w-[50%]">
          <div className="m-auto w-[80%]">
            <div
              ref={container}
              className="h-screen flex flex-col justify-center text-white"
            >
              <div className={styles.body}>{splitWords(phrase)}</div>
            </div>
            <div className="h-screen flex flex-col justify-center text-white">
              <div className="w-full text-3xl">The New Mini - 2022</div>
              <div></div>
            </div>

            <div className="h-screen flex flex-col justify-center text-white">
              <div className="w-full text-3xl">The New Mini - 2022</div>
              <div></div>
            </div>
          </div>
        </div>

        <div
          ref={pinContainerRef}
          className={`w-[50%] h-screen outline outline-1 outline-red-700 items-center justify-center`}
        >
          {/* <div className="rounded-xl w-[40vw] h-[40vw] bg-orange-500"></div> */}
          {/* TODO: make 3D model rotate with scroll */}
          <SceneCanvas source={"/mini.glb"} />
        </div>
      </div>

      <div className="w-screen h-[50vh] bg-black grid place-content-center"></div>
    </div>
  );
}
