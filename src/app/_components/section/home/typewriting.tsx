import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";

export default function Typewriting() {
  const words = [
    {
      text: "and",
    },
    {
      text: "we",
    },
    {
      text: "will",
    },
    {
      text: "fly",
    },
    {
      text: "again.",
    },
  ];
  return (
    <section className="w-full bg-main-gray">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center p-10 text-center lg:py-40">
        <TypewriterEffectSmooth
          words={words}
          className="text-[7.5rem] leading-none text-black/70 md:text-[14rem] lg:text-[18rem]"
        />
      </div>
    </section>
  );
}
