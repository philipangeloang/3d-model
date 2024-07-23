import { FaArrowRight } from "react-icons/fa6";

export default function Mission() {
  return (
    <section className="w-full bg-main-yellow">
      <div className="mx-auto flex max-w-screen-2xl">
        <div className="vertical-mode mt-48 flex rotate-180 justify-end pr-10 text-2xl font-bold tracking-widest text-black/50">
          OUR MISSION
        </div>
        <div className="flex flex-col gap-20 border-l border-black/30">
          <p className="px-28 pt-40 text-7xl">
            Lorem ipsum dolor <br /> sit amet, consec <br />
            tetur adipiscing <br /> elit, sed do <br /> eiusmod te <br />
            mpor incididunt ut <br /> labore et dolore <br /> magna aliqua. Ut
            enim <br /> ad minim veniam
          </p>
          <p className="flex items-center gap-9 pb-40">
            <FaArrowRight
              size={80}
              className="rounded-full bg-gray-700 p-2 text-white"
            />
            <span className="font-inter text-6xl underline">
              Read our story
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
