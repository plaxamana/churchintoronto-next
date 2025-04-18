"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "The Bible",
    description:
      "People need the Bible to transform their lives, not merely inform them.",
  },
  {
    title: "Evangelism",
    description: "People need Jesus, and we need to introduce them to Him.",
  },
  {
    title: "Discipleship",
    description:
      "People need to become real followers of Jesus and need to be changed by Him.",
  },
  {
    title: "Community",
    description:
      "People are made for community. It’s the place where true growth happens.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="px-6 py-20 bg-gray-100">
      <motion.div
        className="max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
          Our Pillars
        </h2>
        <div className="w-10 h-1 mx-auto bg-gray-400 rounded" />
      </motion.div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              {pillar.title}
            </h3>
            <p className="text-base text-gray-600">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
