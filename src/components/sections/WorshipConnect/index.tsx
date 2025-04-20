"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, Mic, Heart, ChevronRight } from "lucide-react";

export default function WorshipConnectSection() {
  return (
    <section className="relative px-6 pt-24 pb-16 -mt-20 bg-gray-100">
      <motion.div
        className="grid max-w-2xl gap-12 pt-24 mx-auto md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Worship With Us */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Worship With Us
          </h2>
          <p className="mb-1 text-gray-700">Sunday 10:00am</p>
          <p className="mb-4 text-gray-700">
            671 Sheppard Ave East
            <br />
            Toronto
          </p>

          <ul className="space-y-3">
            <li>
              <Link
                href="/sermons"
                className="flex items-center text-blue-600 hover:underline"
              >
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Latest Sermons
              </Link>
            </li>
            <li>
              <Link
                href="/podcast"
                className="flex items-center text-blue-600 hover:underline"
              >
                <Mic className="w-5 h-5 mr-2" /> Podcast Archive of Previous
                Sermons
              </Link>
            </li>
            <li>
              <Link
                href="/give"
                className="flex items-center text-red-500 hover:underline"
              >
                <Heart className="w-5 h-5 mr-2" /> Give
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Ways to Connect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Ways to Connect
          </h2>
          <ul className="space-y-3 text-blue-600">
            <li>
              <Link
                href="/community-groups"
                className="flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Community Groups
              </Link>
            </li>
            <li>
              <Link
                href="/try-alpha"
                className="flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Try Alpha
              </Link>
            </li>
            <li>
              <Link
                href="/get-connected"
                className="flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Get Connected With Us
              </Link>
            </li>
            <li>
              <Link
                href="/prayer-request"
                className="flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Prayer Request
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
