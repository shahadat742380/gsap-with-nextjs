"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const ToggleAnimation = () => {
  const container = useRef<any>();
  const tl = useRef<any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const boxes = self.selector(".box");
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -200 }, "<")
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={container} className="container mx-auto px-5">
        <div className="py-10 flex items-center justify-center">
          <button
            onClick={toggleTimeline}
            className="bg-red-600 px-8 py-4 text-white font-semibold text-xl rounded"
          >
            Toggle
          </button>
        </div>

        <div className="my-10 space-y-5 ">
          <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
          <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
          <div className="box mx-auto h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleAnimation;
