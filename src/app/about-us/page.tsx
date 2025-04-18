"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/sections/AboutUsPage/Hero";
import Mission from "@/components/sections/AboutUsPage/Mission";
import Pillars from "@/components/sections/AboutUsPage/Pillars";
import Beliefs from "@/components/sections/AboutUsPage/Beliefs";
import Ministries from "@/components/sections/AboutUsPage/Ministries";

export default function AboutUsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <>
      <Hero />
      <Mission />
      <Pillars />
      <div ref={ref} className="relative h-[40vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="h-[120%] w-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/about-us-2.jpg)",
            }}
          />
        </motion.div>
      </div>
      <Beliefs />
      <Ministries />
    </>
  );
}
