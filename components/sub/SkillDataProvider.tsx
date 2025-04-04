"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true }); // Only see the animation once
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }} // Makes all the skill images appear one after the other, because they all have different indices
    >
      <Image src={src} height={height} width={width} alt="Skill image" />
    </motion.div>
  );
};

export default SkillDataProvider;
