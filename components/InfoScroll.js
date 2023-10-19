"use client";
import gsap from "gsap";
import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./test.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

// }, []);
// gsap.registerPlugin(ScrollTrigger);

export default function InfoScroll() {
//   ScrollTrigger.create({
//     trigger: ".gallery",
//     start: "top top",
//     end: "bottom bottom",
//     pin: ".right",
//   });

  return (
    <div className="w-1/2 p-4">
      {/* <div className="spacer"></div> */}

      {/* <div className='flex justify-center text-5xl'>Mini</div> */}

      <div className="gallery">
        <div className="left">
          <div className="detailsWrapper">
            <div className="details">
              <div className="headline"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
            </div>

            <div className="details">
              <div className="headline"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
            </div>

            <div className="details">
              <div className="headline"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="photos"></div>
        </div>
      </div>

      {/* <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div> */}
    </div>
  );
}
