import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import race1 from "../../assets/images/race4.jpg";
import whatwedo from "../../assets/images/whatwedo.jpg";

/* Count-up hook (minimal, no animation drama) */
function useCountUp(target, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(id);
  }, [target, start]);

  return count;
}

export default function BlogSection() {
  const sections = [
    {
      title: "Who We Are",
      text: `Nemesis Racing is a team of engineers driven by a shared passion for
      motorsport. What began as a small group of enthusiasts has grown into a
      focused engineering unit dedicated to precision, teamwork, and performance.`,
      stats: [
        { value: 15, label: "Years of Legacy" },
        { value: 35, label: "Dedicated Engineers" },
      ],
      image: race1,
    },
    {
      title: "What We Do",
      text: `We design, build, and race machines that reflect innovation and
      discipline. Every component we engineer is tested through real competition,
      pushing our limits and sharpening our skills.`,
      stats: [
        { value: 20, label: "Awards & Recognitions" },
        { value: 1000, label: "Hours of Testing" },
      ],
      image: whatwedo,
    },
  ];

  return (
    <section
      className="py-20 sm:py-28
                 bg-[color:var(--color-bg)]
                 text-white/80"
    >
      <div className="space-y-24">
        {sections.map((sec, idx) => {
          const ref = useRef(null);
          const inView = useInView(ref, { once: true });

          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`max-w-7xl mx-auto
                          grid grid-cols-1 md:grid-cols-2
                          gap-12 items-center
                          px-4 sm:px-8
                          ${idx % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              {/* TEXT */}
              <div className={`${idx % 2 === 1 ? "md:col-start-2" : ""}`}>
                <h3
                  className="font-[var(--font-heading)]
                             uppercase tracking-widest
                             text-2xl sm:text-3xl
                             text-white mb-6"
                >
                  {sec.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {sec.text}
                </p>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-8">
                  {sec.stats.map((s, i) => {
                    const value = useCountUp(s.value, inView);
                    return (
                      <div key={i}>
                        <div
                          className="text-3xl sm:text-4xl
                                     font-[var(--font-heading)]
                                     text-[color:var(--color-primary)]"
                        >
                          {value}+
                        </div>
                        <div
                          className="mt-1 text-xs uppercase tracking-widest
                                     text-white/60"
                        >
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* IMAGE */}
              <div className={`${idx % 2 === 1 ? "md:col-start-1" : ""}`}>
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-64 sm:h-80
                             object-cover
                             border border-white/10"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
