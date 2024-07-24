"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function AnimatedButton() {
  return (
    <motion.p
      whileHover={{
        backgroundColor: "#000000",
        color: "#ffffff",
        backgroundPosition: "0 0",
      }}
      className="absolute mx-auto flex translate-y-5 cursor-pointer gap-3 bg-yellow-300 p-3 text-sm font-bold tracking-widest"
    >
      JOIN THE TEAM <FaArrowRight />
    </motion.p>
  );
}
