import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-gray-300 to-cyan-500 py-20">
        My Project
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://twitter.com/nechejerry/" target="_blank" rel="">
          <ProjectCard
            src="/NextWebsite.png"
            title="Personal Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minima?"
          />
        </a>
        <a href="https://twitter.com/nechejerry/" target="_blank" rel="">
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website cards"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minima?"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
