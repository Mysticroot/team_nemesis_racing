import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import race1 from "../assets/images/race22.jpg";
import race2 from "../assets/images/race2.jpg";
import race3 from "../assets/images/race3.jpg";

const cars = [
  {
    name: "MK-X9",
    year: "2025",
    subtitle: "BAJA SAE INDIA",
    image: race1,
  },
  {
    name: "MK-X8",
    year: "2024",
    subtitle: "BAJA SAE INDIA",
    image: race2,
  },
  {
    name: "MK-X7",
    year: "2023",
    subtitle: "BAJA SAE INDIA",
    image: race3,
  },
];

export function AchievementsHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % cars.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={cars[index].image}
        alt={cars[index].name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Full dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Cinematic gradient */}

      <div className="relative z-10 h-full flex items-end px-6 pb-36 sm:px-16">
        <motion.div
          key={cars[index].name}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* YEAR — NOW A STATEMENT */}
          
            <span
              className="
          px-4 py-1.5
          text-sm sm:text-base
          font-bold
          uppercase
          tracking-[0.35em]
          text-white
          
        "
            >
              {cars[index].year}
            </span>
         

          {/* TITLE — PRIMARY */}
          <h1
            className="
        font-[var(--font-heading)]
        uppercase
        font-black
        text-5xl sm:text-7xl lg:text-8xl
        leading-[0.95]
        text-white
        drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]
      "
          >
            {cars[index].name}
          </h1>

          {/* SUBTITLE — SECONDARY HEADLINE */}
          <p
            className="
        mt-4
        text-base sm:text-lg
        font-semibold
        uppercase
        tracking-[0.3em]
        text-white/85
      "
          >
            {cars[index].subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
