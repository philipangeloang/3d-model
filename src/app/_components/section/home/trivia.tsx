/* eslint-disable @next/next/no-img-element */

export default function Trivia() {
  return (
    <section className="w-full">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Placeholder Image"
            className="h-full w-full px-5 pt-5 md:p-10 lg:mt-36 lg:h-64 lg:w-96 lg:p-0"
          />
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Placeholder Image"
            className="h-full w-full px-5 pb-5 md:p-10 lg:h-64 lg:w-96 lg:p-0"
          />
        </div>
        <div className="mx-auto flex max-w-[45rem] flex-col items-center justify-center gap-10 py-5 text-center lg:py-20">
          <p className="px-10 font-inter text-2xl lg:px-0">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="px-10 font-inter text-xl text-black/70 lg:px-0">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod te mpor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam ad minim veniam ad minim veniam ad minim veniam ad
            minim veniam ad minim veniam ad minim veniam
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Placeholder Image"
            className="h-full w-full px-5 pt-5 md:p-10 lg:mt-36 lg:h-64 lg:w-96 lg:p-0"
          />
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Placeholder Image"
            className="h-full w-full px-5 pb-5 md:p-10 lg:h-64 lg:w-96 lg:p-0"
          />
        </div>
      </div>
    </section>
  );
}
