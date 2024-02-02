"use client";

import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center min-h-screen justify-center w-full h-full pt-60">
      <div className="absolute w-auto h-auto top-0 z-5">
        <motion.div
          variants={slideInFromTop}
          className=" cursive text-[40px] font-medium text-center text-gray-200"
        >
          Responsive
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &
          </span>{" "}
          Aesthetic
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto ">
        <div className="md:flex grid grid-cols-2 md:flex-row items-center gap-8 group cursor-pointer">
          <Image
            src="/12b.jpg"
            alt=""
            width={150}
            height={100}
            className="w-200 h-200 rounded-md shadow-slate-300 border bg-gray-500"
          />

          <Image
            src="/12.jpg"
            alt=""
            width={150}
            height={100}
            className="w-300 h-300 rounded-md border shadow-slate-300  bg-gray-500 overflow-hidden"
          />

          <Image
            src="/12b.jpg"
            alt=""
            width={150}
            height={100}
            className="w-200 h-200 rounded-md shadow-slate-300 border bg-gray-500"
          />
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] mt-10">
        <div className="cursive text-[20px] font-medium text-center z-15 text-gray-300">
          Easy and customiseable Designs
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          src="encryption.webm"
          loop
          muted
          playsInline
          preload="false"
          className="w-full h-auto"
          autoPlay
        />
      </div>
    </div>
  );
};

export default Encryption;
