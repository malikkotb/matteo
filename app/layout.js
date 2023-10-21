"use client"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
