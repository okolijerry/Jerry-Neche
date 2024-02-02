"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-8 md:px-20 mt-40 w-full min-h-screen z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-start md:justify-center  md:m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] md:px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-0  md:mr-[10px] h-5 w-5" />
          <a href="https://wa.link/5kjh0s" target="_blank">
            <h1 className="Welcome-text text-[1.2rem] md:text-[18px]">
              Jerry Neche, FrontEnd Developer
            </h1>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              The best{" "}
            </span>{" "}
            Project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] "
        >
          I&apos;m a FrontEnd web developer with experience in modern websites
          design, responsive display&apos;s and general web based software
          development, check out some of my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="tel:+2349025579441"
          target="_blank"
        >
          {" "}
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/mainIconsdark.svg" alt="" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
