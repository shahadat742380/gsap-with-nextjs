"use client";

import Link from "next/link";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/scroll", label: "Scroll" },
  { path: "/changeColor", label: "Change Color" },
  { path: "/horizontal", label: "Horizontal Scroll" },
];

const Navbar = () => {
  return (
    <div className="py-3 px-10 bg-blue-600 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-white font-bold text-2xl">GSAP</h1>
        </div>
        <div>
          <div className="flex items-center justify-center gap-5">
            {navLinks.map((nav, idx) => (
              <div className="text-white font-semibold " key={idx}>
                <Link href={nav.path}>{nav.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
