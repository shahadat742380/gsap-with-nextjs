"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const GsapHook = () => {
  const { contextSafe } = useGSAP();
  const container = useRef(null);

  useEffect(() => {
    // Setting default y positions
    gsap.set(".box1", { y: 100 });
    gsap.set(".box2", { y: -100 });
    gsap.set(".box3", { y: 100 });
    gsap.set(".boxTitle", { x: -100 });
  }, []);

  useGSAP(
    () => {
      gsap.to(".box1", { y: 0, duration: 2 });
      gsap.to(".box2", { y: 0, duration: 2 });
      gsap.to(".box3", { y: 0, duration: 2 });
      gsap.to(".boxTitle", { x: 0, duration: 2 });
    },
    { scope: container }
  );

  const onEnter = contextSafe(({ currentTarget }: { currentTarget: any }) => {
    gsap.to(currentTarget, { rotation: "+=360", duration: 2 });
  });

  return (
    <section className="h-dvh py-40 ">
      <div ref={container} className="flex justify-center items-center gap-5">
        <div className="box1 h-40 w-40 bg-green-500 rounded flex items-center justify-center">
          <h1 className="boxTitle text-white font-semibold text-2xl">Box</h1>
        </div>
        <div className="box2 h-40 w-40 bg-green-500 rounded flex items-center justify-center">
          <h1 className="boxTitle text-white font-semibold text-2xl">Box</h1>
        </div>
        <div className="box3 h-40 w-40 bg-green-500 rounded flex items-center justify-center">
          <h1 className="boxTitle text-white font-semibold text-2xl">Box</h1>
        </div>
      </div>
      <div
        onClick={onEnter}
        className="mt-10 mx-auto h-40 w-40 bg-green-500 rounded flex items-center justify-center cursor-pointer"
      >
        <h1 className=" text-white font-semibold text-2xl">click</h1>
      </div>
    </section>
  );
};

export default GsapHook;
