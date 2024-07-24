import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function JobPosition() {
  return (
    <section className="w-full bg-main-yellow">
      <div className="mx-auto max-w-screen-2xl p-10 py-10 lg:py-40">
        <h1 className="text-2xl md:text-5xl lg:text-7xl">
          Lorem ipsum <br />
          dolor sit amet.
        </h1>
        <p className="mt-12 flex w-60 items-center justify-center gap-3 bg-white p-3 text-sm font-bold tracking-widest lg:mt-48">
          SEE OPEN POSITIONS <FaArrowRight />
        </p>
      </div>
    </section>
  );
}
