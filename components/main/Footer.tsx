"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Arjun256900/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </p>
            </a>
            <a
              href="https://www.reddit.com/user/Bitter_Mycologist_50/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Reddit</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://github.com/Arjun256900/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </p>
            </a>
            <a
              href="https://www.facebook.com/arjun.s.v.503"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  height={13}
                  width={13}
                />
                <span className="text-[15px] ml-[6px]">Facebook</span>
              </p>
            </a>
            <a
              href="https://linkedin.com/in/arjun-s-v-6657a027a"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="#about-me" rel="noopener noreferrer">
                <span className="text-[15px] ml-[6px]">
                  Learn more about me
                </span>
              </a>
            </p>
            <p
              className="flex flex-row items-center my-[15px] cursor-pointer"
              onClick={() => {
                window.open("mailto:svarjun06@gmail.com");
              }}
            >
              <span className="text-[15px] ml-[6px]">svarjun06@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Arjun S V {new Date().getFullYear()}. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
