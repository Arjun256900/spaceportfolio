import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="md:text-5xl sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="md:max-w-[1100px] flex flex-col gap-10">
        <ProjectCard
          src="/Proj_1.png"
          title="Automated curriculum management system"
          description="This automated site can dynamically manage an institution's curriculum, eliminating all the manual paperworks. This has an integrated workflow system, which can handles a request-approval hierarchy that helps in modidying the cirruclum, and slashing the manual intervention for OD and leave generation"
          link="https://github.com/Arjun256900/curriculum_cit"
        />
        <ProjectCard
          src="/Proj_2.png"
          title="Space themed portfolio"
          description="My personal space-themed portfolio, which showcases my skills, projects and implements a Get In Touch form which allows you to contact me!"
          link="https://github.com/Arjun256900/chat_app"
        />
        <ProjectCard
          src="/Proj_3.jpg"
          title="Chat App"
          description="A group chat application, which on log-in allows you to chat with all the other users who have signed up!"
          link="https://github.com/Arjun256900/chat_app"
        />
      </div>
    </div>
  );
};

export default Projects;
