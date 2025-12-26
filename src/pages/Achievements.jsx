import { motion } from "framer-motion";
import { AchievementsHero } from "./AchievementsHero";

import race1 from "../assets/images/race22.jpg";
import race2 from "../assets/images/race2.jpg";
import race3 from "../assets/images/race3.jpg";

const timelineData = [
  {
    title: "MK-X9",
    year: "2025",
    overall: "8",
    highlights: [
      { event: "Design", rank: "10" },
      { event: "CAE", rank: "10" },
    ],
    image: race1,
  },{
    title: "MK-X9",
    year: "2025",
    overall: "8",
    highlights: [
      { event: "Design", rank: "10" },
      { event: "CAE", rank: "10" },
    ],
    image: race1,
  },
  {
    title: "MK-X8",
    year: "2024",
    overall: "2",
    highlights: [
      { event: "Design", rank: "10" },
      { event: "CAE", rank: "10" },
      { event: "Sales", rank: "10" },
    ],
    image: race2,
  },
  {
    title: "MK-X7",
    year: "2023",
    overall: "2",
    highlights: [
      { event: "Design", rank: "1" },
      { event: "CAE", rank: "1" },
      { event: "Dynamics", rank: "1" },
    ],
    image: race3,
  },
];

export default function Achievements() {
  return (
    <>
      {/* HERO */}
      <AchievementsHero />

      {/* CARDS */}
      <section className="bg-[var(--color-bg)] py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-[var(--font-heading)]
                     uppercase tracking-[0.35em]
                     text-2xl sm:text-3xl
                     text-[var(--color-primary)]
                     mb-12"
        >
          Achievements
        </motion.h2>

        <div
          className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6
        "
        >
          {timelineData.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="
                bg-[#0e0e0e]
                border border-white/10
                hover:border-[var(--color-primary)]
                transition
                rounded-lg
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div className="h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-white/50">{item.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#FFD700]">
                    {item.overall}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    Overall
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-[11px] text-white/70"
                    >
                      <span>{h.event}</span>
                      <span className="text-[#FFD700] font-semibold">
                        #{h.rank}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
} 