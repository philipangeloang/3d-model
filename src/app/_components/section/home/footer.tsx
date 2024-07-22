import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 p-4 pb-10 pt-32">
        <div className="flex justify-between gap-10">
          <div className="font-inter text-5xl font-black">LOGO</div>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <p className="font-inter text-base tracking-widest text-white/70">
                CONTACT
              </p>
              <p className="font-inter">
                Lorem ipsum <br /> lorem@ipsum.com{" "}
              </p>
              <p className="font-inter">
                Lorem ipsum <br /> lorem@ipsum.com{" "}
              </p>
            </div>
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <p className="opacity-0">Contact</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
            </div>
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <p className="opacity-0">Contact</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
              <p className="py-1 font-inter">LOREM IPSUM</p>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-20">©COPYRIGHT LOREM IPSUM</div>
      </div>
    </section>
  );
}
