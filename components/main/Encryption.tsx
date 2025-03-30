"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-0">
      {/* Heading */}
      <div className="absolute top-10 sm:top-0 z-10 text-center">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200"
        >
          Performance&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            and&nbsp;
          </span>
          Security
        </motion.div>
      </div>

      {/* Lock Animation */}
      <div className="flex flex-col items-center justify-center absolute z-20">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="locktop"
            width={40}
            height={40}
            className="translate-y-3 sm:translate-y-5 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="Lock main"
            width={60}
            height={60}
            className="z-10"
          />
        </div>
        <div className="Welcome-box px-4 py-2 border border-[#7042f88b] opacity-90 mt-5">
          <h1 className="Welcome-text text-sm sm:text-md">Encryption</h1>
        </div>
      </div>

      {/* Secure Message */}
      <div className="absolute bottom-5 z-20 px-2 text-center">
        <div className="cursive text-lg sm:text-xl font-bold text-gray-300">
          Securing data with end-to-end encryption technologies
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
