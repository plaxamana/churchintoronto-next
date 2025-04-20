"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxBgImageProps {
  imgname: string;
  alt?: string;
  children?: ReactNode;
  height?: string;
}

export default function ParallaxBgImage({
  imgname,
  alt = "",
  children,
  height = "h-[40vh]",
}: ParallaxBgImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
        aria-hidden="true"
        role="presentation"
      >
        <div className="relative h-[200%] w-full">
          <Image
            src={`/images/${imgname}`}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </motion.div>

      {children && (
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          {children}
        </div>
      )}
    </div>
  );
}
