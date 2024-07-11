/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// import images
import img1 from "@/assets/img/1.png";
import img2 from "@/assets/img/2.png";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: ".scroller",
    });

    gsap.utils.toArray("section").forEach((section, index) => {
      const wrapper = section.querySelector(".wrapper");
      if (!wrapper) return;
      const [xStart, xEnd] =
        index % 2
          ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-cream ">
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          Keep smiling
        </div>
      </section>
      {[1, 2, 3, 4].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <Image
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={img1}
                alt="img"
              />
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          because life is a beautiful thing
        </div>
      </section>
      {[1, 2, 3, 4].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <Image
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={img2}
                alt="img"
              />
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          and there's so much to smile about.
        </div>
      </section>
      <footer className="flex items-center justify-center text-2xl my-96 ">
        <h1 className="text-5xl font-bold text-blue-600">End Scroll</h1>
      </footer>
    </div>
  );
};

export default HorizontalScroll;
