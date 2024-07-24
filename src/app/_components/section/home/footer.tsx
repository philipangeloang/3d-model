import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col p-10 pt-20 lg:flex-row lg:justify-between">
        <div className="font-inter text-3xl font-black text-white">LOGO</div>
        <div className="mt-10 flex flex-col gap-5 lg:mt-0 lg:flex-row lg:gap-56">
          <div className="flex flex-col gap-5 lg:text-2xl">
            <div className="font-inter text-white/70 lg:text-lg">CONTACT</div>
            <div className="font-inter">
              Lorem Ipsum <br />
              lorem@ipsum.com
            </div>
            <div className="font-inter">
              Lorem Ipsum <br />
              lorem@ipsum.com
            </div>
          </div>
          <div className="flex flex-col justify-end gap-5 lg:text-2xl">
            <div className="font-inter">Lorem Ipsum</div>
            <div className="font-inter">Lorem Ipsum</div>
            <div className="font-inter">Lorem Ipsum</div>
          </div>
          <div className="flex flex-col justify-end gap-5 lg:text-2xl">
            <div className="font-inter">Lorem Ipsum</div>
            <div className="font-inter">Lorem Ipsum</div>
            <div className="font-inter">Lorem Ipsum</div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center p-10 text-white/70">
        @COPYRIGHT LOREM IPSUM
      </div>
    </section>
  );
}
