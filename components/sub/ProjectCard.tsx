import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="  overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-20">
      <div className="overflow-hidden h-[600px]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </div>
      <div className="relative p-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>
        <p className="text-white mt-3">
          Check out the source code here &darr;{" "}
        </p>
        <p className="text-white">
          GitHub &rarr;{" "}
          <a href={link} target="_blank" className="text-blue-400">
            Follow link
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
