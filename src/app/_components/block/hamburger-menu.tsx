"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function HamburgerMenu() {
  const [active, setActive] = useState(false);

  const parent = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 10,
      opacity: 0,
    },
  };
  return (
    <div className="flex gap-20">
      <motion.ul
        className="hidden gap-20 font-bold lg:flex"
        animate={active ? "open" : "closed"}
        variants={parent}
      >
        <motion.li className="tracking-widest" variants={item}>
          OUR STORY
        </motion.li>
        <motion.li className="tracking-widest" variants={item}>
          TECHNOLOGY
        </motion.li>
        <motion.li className="tracking-widest" variants={item}>
          JOIN OUR TEAM
        </motion.li>
        <motion.li className="tracking-widest" variants={item}>
          NEWSROOM
        </motion.li>
      </motion.ul>

      <motion.div
        className="flex cursor-pointer flex-col gap-2"
        onClick={() => {
          setActive(!active);
        }}
        whileHover={{
          scale: 1.1,
        }}
        animate={active ? "open" : "closed"}
      >
        <motion.div
          className="h-1 w-12 bg-black"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          variants={{
            open: {
              rotate: "45deg",
              y: "5px",
            },
            closed: {
              rotate: "0deg",
              y: "0px",
            },
          }}
        ></motion.div>
        <motion.div
          initial={{ x: -100 }}
          className="h-1 w-12 bg-black"
          animate={{ x: 0 }}
          variants={{
            open: {
              rotate: "-45deg",
              y: "-5px",
            },
            closed: {
              rotate: "0deg",
              y: "0px",
            },
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
