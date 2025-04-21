"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type TeamQueryResult } from "../../../../sanity.types";

export default function Team({ team }: { team: TeamQueryResult }) {
  const pastors = team.filter((person) => person?.title?.includes("Pastor"));
  const restStaff = team.filter((person) => !person?.title?.includes("Pastor"));
  const teamMembers = [...pastors, ...restStaff];

  return (
    <section id="team" className="bg-gray-50 px-6 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 max-w-6xl mx-auto">
        {teamMembers.map((person, index) => (
          <motion.div
            key={person._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.125 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src={person.imageUrl as string}
                alt={person.name as string}
                fill
                sizes="(min-width: 768px) 160px, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-sm font-bold uppercase text-gray-800">
              {person.name}
            </h3>
            <p className="text-sm italic text-gray-600">{person.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
