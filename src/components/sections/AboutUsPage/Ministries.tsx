"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ministries = [
  {
    title: "Family & Kids",
    description: `Church In Toronto is committed to engaging the whole family. We offer a full kids program during both services. Kids are taught age appropriately about God and all that He has done for us. This happens just steps away from the rest of the family, who come to know God through a time of worship in song, and through hearing God’s word spoken.`,
  },
  {
    title: "Students",
    description: `At Church In Toronto we place a high priority on our next generation. We recognize the many challenging transitions that teens and young adults encounter. We work really hard at making this process of change as smooth as possible in a loving and safe environment. Our goal is for each student to know God, to experience God and to build significant relationships in community.`,
    note: `Grades 6–12 – Saturday from 6–9pm at our church (671 Sheppard Ave. E)`,
  },
  {
    title: "Women",
    description: `Sisterhood speaks of care and connectedness. And that is what Church In Toronto is endeavouring to develop among the women at our church. Whether it is a small group of older and younger women gathering for tea, or it is a larger group gathering to be inspired and challenged by a female ministry leader, our hope is for the women among us to experience a deep sense of togetherness and love.`,
  },
  {
    title: "Community Groups",
    description: `Church In Toronto believes that church is done best in community. While Sunday services cover this to some degree, we recognize the limitations of a larger gathering. So, we encourage all of our members to participate with others in home-based groups. It’s there that questions can be safely asked, supporting prayer can happen, and substantial growth in Christ can occur.`,
  },
  {
    title: "Outreach",
    description: `At Church In Toronto we strive to be a meaningful community presence. On the one hand, we partner with established compassion ministries that reach the needy of our city. On the other hand, our doors are open to support artists in our immediate neighbourhood.`,
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="bg-gray-100 px-6 py-20">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our Ministries
        </h2>
        <p className="text-gray-600">
          We serve people of all ages and stages of life. Here&apos;s how:
        </p>
      </motion.div>

      <ul className="max-w-3xl mx-auto space-y-10">
        {ministries.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex items-start gap-2 mb-2">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
              <h3 className="text-base font-semibold uppercase text-gray-800 tracking-wide">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
            {item.note && (
              <p className="text-sm text-gray-600 italic mt-2">{item.note}</p>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
