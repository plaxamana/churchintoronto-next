"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is God’s Word. It is accurate, authoritative, and applicable to our everyday lives.",
  },
  {
    title: "God",
    text: "We believe there is one eternal God who is the Creator of all things. He exists in three persons: God the Father, God the Son, and God the Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    text: "We believe Jesus Christ is the Son of God who came to earth, lived a sinless life, died on the cross for our sins, and rose again to give us new life.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe the Holy Spirit dwells in every believer and empowers us to live according to God’s will.",
  },
  {
    title: "Salvation",
    text: "We believe salvation is a gift from God through faith in Jesus Christ. It is not earned through works but received by grace.",
  },
  {
    title: "Mankind",
    text: "We believe that all people are made in the image of God and are in need of salvation through Jesus Christ.",
  },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="bg-white px-6 py-20">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What We Believe
        </h2>
        <p className="text-gray-600 italic">
          “So then faith comes by hearing, and hearing by the word of God.” —
          Romans 10:17
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-10">
        {beliefs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-start gap-2 mb-2">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
              <h3 className="text-base font-semibold uppercase text-gray-800 tracking-wide">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
