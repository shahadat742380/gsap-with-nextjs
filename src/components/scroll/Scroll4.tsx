"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll4 = () => {
  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    gsap.set(".smBox", { y: 100 });

    ScrollTrigger.batch(".smBox", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: { each: 0.15, grid: [1, 4] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    });

    ScrollTrigger.addEventListener("refreshInit", () =>
      // @ts-ignore
      gsap.set(".smBox", { y: 0 })
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-20 container mx-auto">
      <div className=" grid grid-cols-4  gap-x-10 gap-y-10">
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
        <div className="smBox h-40 w-full rounded bg-blue-500 flex items-center justify-center">
          box
        </div>
      </div>
    </div>
  );
};

export default Scroll4;
