import { FaArrowRight } from "react-icons/fa6";

export default function HomeVideo() {
  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-screen-2xl p-10">
        <p className="absolute mx-auto flex translate-y-5 gap-3 bg-yellow-300 p-3 text-sm font-bold tracking-widest">
          JOIN THE TEAM <FaArrowRight />
        </p>
      </div>

      <video
        src="https://content.ltaresearch.com/wp-content/uploads/2023/12/Website-Hero-Reduced-File-Size.mp4"
        preload={"auto"}
        muted={true}
        autoPlay={true}
        loop={true}
        playsInline={true}
      ></video>
    </section>
  );
}
