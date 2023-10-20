"use client";
import SceneCanvas from "../../components/SceneCanvas";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });
  }, []);
    
  return (
    <div>
      <div className={styles.spacer}></div>
      {/* <div className="w-1/2 overflow-hidden">
        <SceneCanvas source={"/mini.glb"} />
      </div> */}

      <div className={styles.gallery}>
        <div className={styles.left}>
          <div className={styles.detailsWrapper}>
            <div className={styles.details}>
              <div className={styles.headline}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.details}>
              <div className={styles.headline}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.details}>
              <div className={styles.headline}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photos}></div>
        </div>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.spacer}></div>
      <div className={styles.spacer}></div>

    </div>
  );
}

{
  /* <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div> */
}
