"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "../../../../../public/Earth";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AuroraBackground } from "~/app/_components/ui/aurora-background";
import { FaArrowRight } from "react-icons/fa6";

export default function Scene() {
  return (
    <AuroraBackground>
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-10 pt-32">
        <div>
          <div className="text-xl font-bold tracking-widest">THE MOTHER</div>
          <div className="text-6xl tracking-widest">Our Earth</div>
          <div className="font-inter text-2xl tracking-widest">
            Explore the 3D version of Earth, lorem ipsum.
          </div>
        </div>
        <div className="z-50 mx-auto mt-12 flex w-full max-w-screen-2xl cursor-pointer items-center justify-end gap-9 pb-32">
          <span className="font-inter text-4xl underline">Launch Earth</span>
          <FaArrowRight size={60} className="rounded-full bg-main-yellow p-2" />
        </div>
      </div>

      <Canvas>
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
