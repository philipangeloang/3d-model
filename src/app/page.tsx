import { HydrateClient } from "~/trpc/server";
import dynamic from "next/dynamic";
import Navbar from "./_components/section/navbar";
import Hero from "./_components/section/home/hero";
import HomeVideo from "./_components/section/home/home-video";
import Mission from "./_components/section/home/mission";
import Trivia from "./_components/section/home/trivia";
import Typewriting from "./_components/section/home/typewriting";
import JobPosition from "./_components/section/home/job-position";
import Footer from "./_components/section/home/footer";

const Scene = dynamic(() => import("./_components/section/home/scene"), {
  ssr: false,
});

export default async function Home() {
  return (
    <HydrateClient>
      <div className="w-full bg-white bg-grid-small-black/[0.15] dark:bg-black dark:bg-grid-small-white/[0.07]">
        <Navbar />
        <Hero />
      </div>
      <HomeVideo />
      <Mission />
      <Trivia />
      <Typewriting />
      <Scene />
      <JobPosition />
      <Footer />
    </HydrateClient>
  );
}
