import { FaArrowRight } from "react-icons/fa6";

export default function AnimatedButton() {
  return (
    <p className="absolute mx-auto flex translate-y-5 cursor-pointer gap-3 bg-yellow-300 p-3 text-sm font-bold tracking-widest transition-colors delay-75 duration-300 ease-in-out hover:bg-black hover:text-white">
      JOIN THE TEAM <FaArrowRight />
    </p>
  );
}
