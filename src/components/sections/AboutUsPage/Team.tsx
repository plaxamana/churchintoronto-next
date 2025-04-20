"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Nigel Tomes",
    role: "Teaching Pastor/Church Elder",
    image: "/images/team/Nigel.png",
  },
  {
    name: "Del Martin",
    role: "Teaching Pastor/Church Elder",
    image: "/images/team/Del.png",
  },
  {
    name: "Ian Brinksman",
    role: "Teaching Pastor/Church Elder",
    image: "/images/team/Ian.png",
  },
  {
    name: "Bin Choi",
    role: "Community Pastor",
    image: "/images/team/Bin.png",
  },
  {
    name: "Steve Pritchard",
    role: "Church Elder",
    image: "/images/team/Steve.png",
  },
  {
    name: "Shirley Tomes",
    role: "Women Ministries, Children’s Ministries",
    image: "/images/team/Shirley.png",
  },
  {
    name: "Jane Suerte",
    role: "Children’s Ministries",
    image: "/images/team/Jane.png",
  },
  {
    name: "Dennis Clarkson",
    role: "Children’s Ministries",
    image: "/images/team/Dennis.png",
  },
];

export default function Team() {
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
        {team.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.125 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(min-width: 768px) 160px, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-sm font-bold uppercase text-gray-800">
              {person.name}
            </h3>
            <p className="text-sm italic text-gray-600">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
