import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function JobPosition() {
  return (
    <section className="bg-main-yellow w-full">
      <div className="mx-auto max-w-screen-2xl p-4 py-40">
        <h1 className="text-6xl">
          Lorem ipsum <br />
          dolor sit amet.
        </h1>
        <p className="mt-48 flex w-60 items-center justify-center gap-3 bg-white p-3 text-sm font-bold tracking-widest">
          SEE OPEN POSITIONS <FaArrowRight />
        </p>
      </div>
    </section>
  );
}
