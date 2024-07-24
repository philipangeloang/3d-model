import AnimatedButton from "../../block/animated-button";

export default function HomeVideo() {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="relative mx-auto max-w-screen-2xl p-10">
        <AnimatedButton />
      </div>

      <video
        src="https://content.ltaresearch.com/wp-content/uploads/2023/12/Website-Hero-Reduced-File-Size.mp4"
        preload={"auto"}
        muted={true}
        autoPlay={true}
        loop={true}
        playsInline={true}
      />
    </section>
  );
}
