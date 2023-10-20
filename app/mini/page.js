"use client";
import SceneCanvas from "../../components/SceneCanvas";
import gsap from "gsap";
import React, { useRef, useLayoutEffect } from "react";

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

  return (
    <div>
      <div className="w-screen h-[50vh] bg-black grid place-content-center">
        <div className=" text-4xl text-white">Mini 2023</div>
      </div>

      <div ref={imageContainer} className="flex bg-black outline outline-1 outline-red-600">
        <div className="left w-[50%]">
          <div className="m-auto w-[80%]">
            <div className="h-screen flex flex-col justify-center outline outline-1 outline-red-700 text-white">
              <div className="w-full text-3xl">The New Mini - 2022</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas et, similique sequi odio ipsam obcaecati assumenda
                corporis ex pariatur quos totam? Fugiat eum veniam iusto a
                praesentium voluptatum enim autem!
              </div>
            </div>
            <div className="h-screen flex flex-col justify-center outline outline-1 outline-red-700 text-white">
              <div className="w-full text-3xl">The New Mini - 2022</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas et, similique sequi odio ipsam obcaecati assumenda
                corporis ex pariatur quos totam? Fugiat eum veniam iusto a
                praesentium voluptatum enim autem!
              </div>
            </div>

            <div className="h-screen flex flex-col justify-center outline outline-1 outline-red-700 text-white">
              <div className="w-full text-3xl">The New Mini - 2022</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas et, similique sequi odio ipsam obcaecati assumenda
                corporis ex pariatur quos totam? Fugiat eum veniam iusto a
                praesentium voluptatum enim autem!
              </div>
            </div>
          </div>
        </div>

        <div ref={pinContainerRef} className={`h-screen outline outline-1 outline-red-700 items-center justify-center`}>
          {/* <div className="rounded-xl w-[40vw] h-[40vw] bg-orange-500"></div> */}
          {/* TODO: make 3D model rotate with scroll */}
          <SceneCanvas source={"/mini.glb"} />
        </div>
      </div>

      <div className="w-screen h-[50vh] bg-black grid place-content-center"></div>
    </div>
  );
}
