"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[50vh] lg:h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url(/images/about-us.jpg)", backgroundPosition: "top center" }}
    >

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">About Us</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#mission"
            className="px-5 py-2 text-sm font-semibold transition bg-white rounded-md text-slate-800 md:text-base hover:bg-gray-100"
          >
            Our Mission
          </a>
          <a
            href="#beliefs"
            className="px-5 py-2 text-sm font-semibold transition bg-white rounded-md text-slate-800 md:text-base hover:bg-gray-100"
          >
            What We Believe
          </a>
          <a
            href="#ministries"
            className="px-5 py-2 text-sm font-semibold transition bg-white rounded-md text-slate-800 md:text-base hover:bg-gray-100"
          >
            Our Ministries
          </a>
          <a
            href="#team"
            className="px-5 py-2 text-sm font-semibold transition bg-white rounded-md text-slate-800 md:text-base hover:bg-gray-100"
          >
            Our Team
          </a>
        </div>
      </motion.div>
    </section>
  );
}
