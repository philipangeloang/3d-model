"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "../../../../../public/Earth";
import { Environment, OrbitControls } from "@react-three/drei";
import { AuroraBackground } from "~/app/_components/ui/aurora-background";
import { FaArrowRight } from "react-icons/fa6";

export default function Scene() {
  return (
    <AuroraBackground>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between p-10 lg:flex-row lg:pt-32">
        <div>
          <div className="text-md font-bold tracking-widest lg:text-xl">
            THE MOTHER
          </div>
          <div className="text-3xl tracking-widest lg:text-6xl">Our Earth</div>
          <div className="font-inter text-lg tracking-widest lg:text-2xl">
            Explore the 3D version of Earth, lorem ipsum.
          </div>
        </div>
        <div className="pb:5 z-50 mx-auto mt-12 flex w-full max-w-screen-2xl cursor-pointer items-center justify-end gap-9 lg:pb-32">
          <span className="font-inter text-2xl underline lg:text-4xl">
            Launch Earth
          </span>
          <FaArrowRight size={60} className="rounded-full bg-main-yellow p-2" />
        </div>
      </div>

      <Canvas className="py-16 lg:py-0">
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </AuroraBackground>
  );
}
