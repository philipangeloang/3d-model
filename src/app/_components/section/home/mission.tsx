"use client";
import { FaArrowRight } from "react-icons/fa6";
import { HeroHighlight, Highlight } from "../../ui/hero-highlight";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="w-full bg-main-yellow">
      <div className="mx-auto flex max-w-screen-2xl">
        <div className="vertical-mode mt-48 flex rotate-180 justify-end pr-10 text-xl font-bold tracking-widest text-black/50 lg:text-2xl">
          OUR MISSION
        </div>
        <div className="flex flex-col gap-0 border-l border-black/30 md:gap-10 lg:gap-20">
          <HeroHighlight className="px-10 pt-10 text-2xl md:pt-20 md:text-5xl lg:px-28 lg:pt-40 lg:text-7xl">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className=""
            >
              Lorem ipsum dolor <br /> sit amet, consec <br />
              tetur adipiscing <br /> elit, sed do <br /> eiusmod
              <Highlight>
                te <br />
                mpor incididunt ut
              </Highlight>{" "}
              <br /> labore et dolore <br /> magna aliqua.
              <Highlight>
                Ut enim <br /> ad minim veniam.
              </Highlight>
            </motion.h1>
          </HeroHighlight>

          <p className="flex items-center gap-9 pb-10 md:pb-20 lg:pb-40 lg:pt-20">
            <FaArrowRight
              size={80}
              className="rounded-full bg-gray-700 p-2 text-white"
            />
            <span className="font-inter text-2xl underline md:text-4xl lg:text-6xl">
              Read our story
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
