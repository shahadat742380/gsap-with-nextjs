"use client";
import React, { useEffect,  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll3 = () => {
  const main = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self: any) => {
      const box1 = self.selector("#box1");
      const box2 = self.selector(".box2");
      const box3 = self.selector(".box3");
      const box4 = self.selector(".box4");

      gsap.to(box1, {
        x: -300,
        scrollTrigger: {
          trigger: box4,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
      gsap.to(box3, {
        rotate: -360,
        scrollTrigger: {
          trigger: box3,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
      gsap.to(box2, {
        rotate: 360,
        scrollTrigger: {
          trigger: box1,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
      gsap.to(box4, {
        x: 300,
        scrollTrigger: {
          trigger: box4,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="h-dvh flex justify-center gap-10" ref={main}>
        <div
          id="box1"
          className=" h-28 w-28 rounded bg-blue-500 flex items-center justify-center"
        >
          box1
        </div>
        <div className="box2  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box2
        </div>
        <div className="box3  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box3
        </div>
        <div className="box4  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
          box4
        </div>
      </div>
    </div>
  );
};

export default Scroll3;
