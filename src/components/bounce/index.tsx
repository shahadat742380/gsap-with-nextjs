"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const BounceAnimation = () => {
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
        .to(boxes[0], { rotation: 360, duration: 2, ease: "bounce.out" })
        .to(boxes[1], { rotation: 360, duration: 2, ease: "bounce.in" }, )
        .to(boxes[2], { rotation: 360, duration: 2, ease: "bounce.inOut" }, )
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={container} className="container h-dvh mx-auto px-5">
        <div className="py-10 flex items-center justify-center">
          <button
            onClick={toggleTimeline}
            className="bg-blue-600 px-8 py-4 text-white font-semibold text-xl rounded"
          >
            Bounce
          </button>
        </div>

        <div className="my-10 flex justify-center gap-20 ">
          <div className="box  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
          <div className="box  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
          <div className="box  h-28 w-28 rounded bg-blue-500 flex items-center justify-center">
            <h1 className="text-white font-semibold text-xl">box-1</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BounceAnimation;


