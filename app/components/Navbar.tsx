import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0461]/50  bg-[#03001417] backdrop-blur-md z-50 px-2">
      <div
        className="flex w-full h-full flex-row items-center justify-between p-0 gap-[15px] m-auto md:px-[10px]"
        id="/"
      >
        <a href="#about" className="h-auto w-auto flex flex-row items-center ">
          <Image
            src="/NavLogo.png"
            alt=""
            width={70}
            height={70}
            className="cursor-pointer hidden md:block hover:animate-spin"
          />
          <span className="font-bold text-2xl md:ml-[10px] block text-[#fff] md:block">
            JerryCodes
          </span>
        </a>

        <div className="w-[500px] overflow-hidden md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[0] md:mr-[15px] md:px-[20px]  py-[10px] rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer pl-2  ">
              About
            </a>
            <a href="#skills" className="cursor-pointer pl-2 ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer px-2  ">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <ul
              key={index}
              className="md:flex text-gray-400 bg-transparent hidden text-[15px] h-full w-full flex-row gap-8"
            >
              <li className="hover:scale-x-500  hover:text-white">
                <a href={social.src} target="_blank">
                  {social.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
