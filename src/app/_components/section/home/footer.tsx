import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 p-4 pb-20 pt-32">
        <div className="flex justify-between gap-10">
          <div className="font-inter text-5xl font-black">LOGO</div>
        </div>
        <div>@copyright</div>
      </div>
    </section>
  );
}
