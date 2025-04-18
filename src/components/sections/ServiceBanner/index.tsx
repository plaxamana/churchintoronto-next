"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceBanner() {
  return (
    <section className="relative z-10 max-w-6xl px-6 py-10 mx-auto -mt-24 text-white shadow-xl bg-slate-800">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        <motion.h2
          className="text-lg font-medium md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We are conducting in-person services every Sunday at 10:00am
        </motion.h2>

        <motion.div
          className="flex flex-col justify-center gap-4 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/visit"
            className="px-6 py-3 text-sm text-white transition border border-white rounded-md md:text-base hover:bg-white hover:text-slate-800"
          >
            Attend In-Person
          </Link>
          <Link
            href="/watch"
            className="px-6 py-3 text-sm text-white transition border border-white rounded-md md:text-base hover:bg-white hover:text-slate-800"
          >
            Watch Service Online
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
