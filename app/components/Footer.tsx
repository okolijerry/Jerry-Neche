import React from "react";
import Link from "next/link";

import {
  FaGithubSquare,
  FaTwitterSquare,
  FaExternalLinkSquareAlt,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-fulll bg-transparent text-gray-200 shadow-lg p-[15px] cursor-pointer">
      <div className="w-full flex flex-col items-center justify-center m-auto cursor-pointer">
        <div className="w-full h-full md:flex grid grid-cols-3 ml-8 md:ml-0  gap-10 flex-row items-center justify-around flex-wrap cursor-pointer">
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start cursor-pointer">
            <div className="font-bold text-[18px]">Community</div>
            <a
              href="https://github.com/okolijerry/"
              target="_blank"
              className="cursor-pointer"
              rel=""
            >
              <div className="flex flex-row items-start my-[15px] cursor-pointer">
                <Link
                  href="https://github.com/okolijerry/"
                  target="_blank"
                  className="text-[32px] hover:cursor-pointer"
                >
                  {" "}
                  <FaGithubSquare className=" text-green-400" />
                </Link>{" "}
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </div>
            </a>

            <div className="flex flex-row items-start my-[15px] cursor-pointer">
              <Link
                href="https://wa.link/5kjh0s"
                target="_blank"
                className="text-[32px] hover:cursor-pointer"
              >
                {" "}
                <FaWhatsappSquare className=" text-green-400" />
              </Link>{" "}
              <span className="text-[15px] ml-[6px]">Whatsapp</span>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[18px]">Socials</div>
            <div className="flex flex-row items-start my-[15px] cursor-pointer">
              <Link
                href="https://linkedin.com/okolijerryneche/"
                target="_blank"
                className="text-[32px] hover:cursor-pointer"
              >
                <FaExternalLinkSquareAlt className="text-blue-500" />
              </Link>{" "}
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </div>
            <div className="flex flex-row items-start my-[15px] cursor-pointer">
              <Link
                href="https://twitter.com/nechejerry/"
                target="_blank"
                className="text-[32px] hover:cursor-pointer"
              >
                <FaTwitterSquare className="text-blue-500" />
              </Link>{" "}
              <span className="text-[15px] ml-[6px]">X</span>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[18px]">Business</div>
            <div className="flex flex-row items-start my-[15px] cursor-pointer">
              <Link
                href="tel:+2349025579441"
                target="_blank"
                className="text-[32px] hover:cursor-pointer hover:text-white"
              >
                {" "}
                <FaPhoneSquare className="text-orange-500 cursor-pointer" />
              </Link>{" "}
              <span className="text-[15px] ml-[6px]">Contact</span>
            </div>
            <div className="flex flex-row items-start my-[15px] cursor-pointer">
              <Link
                href="mailto:okolijerryneche@gmail.com"
                target="_blank"
                className="text-[32px] hover:cursor-pointer"
              >
                {" "}
                <FaMessage className="text-orange-500" />{" "}
              </Link>{" "}
              <span className="text-[15px] ml-[6px]">Mail</span>
            </div>
          </div>
        </div>

        <div className="m-[2rem] text-[15px] text-center ">
          &copy; JerryCodes 2024, FeliNech Inc. All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
