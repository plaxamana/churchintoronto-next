"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="px-6 py-20 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          To lead people into a life-changing relationship with Jesus.
        </p>
      </motion.div>
    </section>
  );
}
