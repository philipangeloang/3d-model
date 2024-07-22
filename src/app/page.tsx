import { HydrateClient } from "~/trpc/server";
import Navbar from "./_components/section/navbar";
import Hero from "./_components/section/home/hero";
import HomeVideo from "./_components/section/home/home-video";
import Mission from "./_components/section/home/mission";
import Trivia from "./_components/section/home/trivia";
import Typewriting from "./_components/section/home/typewriting";
import JobPosition from "./_components/section/home/job-position";
import Footer from "./_components/section/home/footer";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="w-full bg-white bg-grid-black/[0.03] dark:bg-black dark:bg-grid-white/[0.03]">
        <Navbar />
        <Hero />
      </div>
      <HomeVideo />
      <Mission />
      <Trivia />
      <Typewriting />
      <JobPosition />
      <Footer />
    </HydrateClient>
  );
}
