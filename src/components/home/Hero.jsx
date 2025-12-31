import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import race1 from "../../assets/images/race22.jpg";
import race2 from "../../assets/images/race2.jpg";
import race3 from "../../assets/images/race3.jpg";

// 👉 Example video import (use your own file)
 //import heroVideo from "../../assets/images/herovideo.mp4";

const images = [race1, race2, race3];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* =====================================================
          IMAGE HERO (CURRENT – ACTIVE)
      ====================================================== */}
      <img
        key={index}
        src={images[index]}
        alt="Team Nemesis Racing"
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
      />

      {/* =====================================================
          VIDEO HERO (TESTING – COMMENTED)
          👉 Uncomment this block and comment the <img> above
          👉 Good for checking motion, drama, and branding feel
      ====================================================== */}
      
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      /> */}
     

      {/* STATIC OVERLAY (WORKS FOR BOTH IMAGE & VIDEO) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-end px-6 pb-28 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase font-extrabold leading-tight text-white">
            TEAM NEMESIS
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-heading uppercase tracking-wide text-white/90">
            Formula Student Electric
          </h2>

          <p className="mt-5 max-w-xl text-sm sm:text-base text-white/80 font-body leading-relaxed">
            Engineered by passion. Driven by data. Built to compete at the
            highest level of motorsport engineering.
          </p>
        </motion.div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 ${
              i === index
                ? "bg-[var(--color-primary)]"
                : "bg-white/30 hover:bg-white"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
