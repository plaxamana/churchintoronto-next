"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setBackgroundImage(heroImages[randomIndex]);
  }, []);

  if (!backgroundImage) return <div className="h-[80vh] bg-black" />;

  return (
    <section className="relative h-[50vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-4 text-center">
        <motion.h1
          className="mb-6 text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          To lead people into a life-changing relationship with Jesus.
        </motion.h1>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/about"
            className="px-6 py-3 text-sm font-semibold text-blue-700 transition bg-white rounded-md md:text-base hover:bg-gray-100"
          >
            Get to Know Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
