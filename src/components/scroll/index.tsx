"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = document.querySelectorAll(".box");
      const h1 = document.querySelectorAll("h1")[2]; // Selecting the second h1
      const main = document.querySelector(".main");

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 300,
          scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      gsap.to(h1, {
        fontSize: "5rem",
        opacity: 1,
        scrollTrigger: {
          trigger: main,
          end: "top 20%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section className="w-full h-dvh text-center pt-20">
        <h1 className="text-3xl font-bold text-blue-600">
          Basic ScrollTrigger with NextJS
        </h1>
        <h2 className="text-xl font-semibold text-blue-800">
          Scroll down to see the magic happen!!
        </h2>
        <div className="pt-10"></div>
      </section>
      <div className="main w-full h-dvh space-y-20">
        <h1 className="opacity-0 text-xl py-10 font-bold text-blue-500 text-center">
          Box Animation
        </h1>

        <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box1
        </div>
        <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box2
        </div>
        <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box3
        </div>
        <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box4
        </div>
      </div>
      <section className="w-full h-dvh"></section>
    </div>
  );
};

export default ScrollAnimation;
