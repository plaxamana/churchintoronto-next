"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CITKidsSection() {
  return (
    <section className="px-6 pt-16 pb-24 bg-gray-100">
      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
        {/* Left: Text Content */}
        <div>
          <motion.h2
            className="mb-6 text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            CIT Kids
          </motion.h2>

          <motion.p
            className="mb-6 text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Church in Toronto is committed to engaging the whole family. We
            offer a full kids program during both services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="/cit-kids"
              className="inline-block px-6 py-3 font-semibold text-gray-800 transition border border-gray-800 rounded-md hover:bg-gray-200"
            >
              Watch CIT Kids
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image
            src="/images/cit-kids.jpg" // Replace with your actual path
            alt="Children participating in CIT Kids"
            width={640}
            height={427}
            className="object-cover w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
