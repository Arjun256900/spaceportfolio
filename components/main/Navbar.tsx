"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 flex items-center justify-between">
      {/* Logo */}
      <a href="#about-me" className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="cursor-pointer hover:animate-slowspin"
        />
        <span className="font-bold ml-2 hidden md:block text-gray-300">
          Arjun | Portfolio
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-lg items-center justify-between bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full">
        <a
          href="#about-me"
          className="text-white hover:text-gray-400 px-3 transition duration-300"
        >
          About me
        </a>
        <a
          href="#skills"
          className="text-white hover:text-gray-400 px-3 transition duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-white hover:text-gray-400 px-3 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#getintouch"
          className="text-white hover:text-gray-400 px-3 transition duration-300s"
        >
          Get in touch
        </a>
      </div>

      {/* Social Icons (Always Visible) */}
      <div className="hidden md:flex flex-row gap-5">
        {Socials.map((social) => (
          <a
            href={social.link}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>

      {/* Hamburger Button (Visible on Small Screens) */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
        {isOpen ? null : <Menu size={32} />}
      </button>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Mobile Navigation */}
        <div className="backdrop-blur-lg bg-neutral-500/50 pb-3 rounded-l-2xl">
          <nav className="flex flex-col items-start mt-16 px-6 space-y-6 ">
            <a
              href="#about-me"
              className="text-white text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About me
            </a>
            <a
              href="#skills"
              className="text-white text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#getintouch"
              className="text-white text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </nav>

          {/* Social Icons in Drawer */}
          <div className="flex gap-5 mt-10 px-6">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={28}
                height={28}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
