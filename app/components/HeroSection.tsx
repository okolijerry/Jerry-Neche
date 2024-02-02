import React from "react";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <div className="flex flex-col reds relative min-h-screen h-full w-full min-w-full items-center">
      <video
        muted
        loop
        className="rotate-180 absolute top-[-550px] lg:top-[-340px] md:top-[-1200px] left-0 z-[1] w-full h-full object-cover"
        autoPlay
      >
        <source src="/blackhole.webm" type="video/webm" />{" "}
      </video>

      <HeroContent />
    </div>
  );
};

export default HeroSection;
