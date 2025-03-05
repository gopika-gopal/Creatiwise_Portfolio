import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-5 py-20 bg-black text-white">
      <div className="max-w-6xl w-full font-antonio">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide leading-snug">
          <span className="text-white">I AM A</span> <span className="text-white">FREELANCE</span>
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase mt-6 tracking-wide leading-snug">
          DESIGNER <span className="text-white">FROM</span>
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase mt-6 tracking-wide leading-snug">
          SAN FRANCISCO
        </h1>
      </div>
    </section>
  );
};

export default Hero;
