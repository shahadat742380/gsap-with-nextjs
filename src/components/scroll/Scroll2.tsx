"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll2 = () => {
  const main = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context((self: any) => {
      const boxes = self.selector(".box");

      boxes.forEach((box: any, index: number) => {
        gsap.to(box, {
          x: -300,
          scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="w-full h-dvh space-y-20" ref={main}>
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

export default Scroll2;
