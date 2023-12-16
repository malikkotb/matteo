"use client";
import AnimateCOunter from "@/components/AnimateCOunter";
import Counter from "@/components/Counter";
import { useState, useEffect } from "react";

export default function page() {
  return (
    <>
      <div className="h-screen w-screen bg-[#011EF5] text-center flex items-center">
        <AnimateCOunter />
      </div>
      <div className="h-screen w-screen bg-white text-center flex items-center">
        <div className="text-9xl text-black">MATTEEO</div>
        <br />
        <div className="text-9xl text-black"><span className=" italic">J</span>UST</div>
      </div>
    </>
  );
}
