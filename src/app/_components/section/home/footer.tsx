import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 p-10 pt-32">
        <div className="flex justify-between gap-10">
          <div className="font-inter text-5xl font-black">LOGO</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <div className="font-inter text-base tracking-widest text-white/70">
                CONTACT
              </div>
              <div className="font-inter">
                Lorem ipsum <br /> lorem@ipsum.com{" "}
              </div>
              <div className="font-inter">
                Lorem ipsum <br /> lorem@ipsum.com{" "}
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <div className="opacity-0">Contact</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
            </div>
            <div className="col-span-4 flex flex-col gap-5 text-2xl">
              <div className="opacity-0">Contact</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
              <div className="py-1 font-inter">LOREM IPSUM</div>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-20">©COPYRIGHT LOREM IPSUM</div>
      </div>
    </section>
  );
}
