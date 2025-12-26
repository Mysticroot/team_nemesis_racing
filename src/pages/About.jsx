import { motion } from "framer-motion";

import aboutHero from "../assets/images/achi.jpg";
import teamImg from "../assets/images/about.jpg";
import actionImg from "../assets/images/race1.jpg";

export default function About() {
  return (
    <div className="bg-[var(--color-bg)] text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

        <div className="relative z-10 h-full flex items-end px-6 pb-28 sm:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p
              className=" px-4 py-1.5
          text-sm sm:text-base
          font-bold
          uppercase
          tracking-[0.35em]
          text-white"
            >
              About the Team
            </p>

            <h1
              className="font-[var(--font-heading)]
                         uppercase font-extrabold
                         text-4xl sm:text-6xl lg:text-7xl
                         leading-tight text-white"
            >
              Nemesis Racing
            </h1>

            {/* <p
              className=" px-4 py-1.5
          text-sm sm:text-base
          uppercase
          tracking-[0.15em]
          text-white"
            >
              A student-driven motorsport team where engineering precision,
              innovation, and competition converge.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <InfoSection
        title="Who We Are"
        text="Nemesis Racing is a student-driven motorsport team where engineering,
        innovation, and competition intersect. We design, build, and race
        off-road vehicles while cultivating leadership, collaboration, and
        real-world problem solving."
        image={teamImg}
      />

      {/* WHAT WE DO */}
      <InfoSection
        title="What We Do"
        text="From CAD design and simulation to manufacturing and testing, we engineer
        high-performance machines that compete at national events. Our focus is
        precision, reliability, and continuous improvement."
        image={actionImg}
        reverse
      />

      {/* VISION */}
      <section className="relative py-20 sm:py-24 px-6 overflow-hidden">
        {/* blue ambient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(26,115,232,0.18),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-[var(--font-heading)]
                       uppercase tracking-[0.3em]
                       text-xl sm:text-3xl
                       text-[var(--color-primary)] mb-6"
          >
            Our Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/75 text-base sm:text-lg leading-relaxed"
          >
            To build engineers who think beyond limits, innovate responsibly,
            and represent India on global motorsport platforms through
            excellence in engineering and teamwork.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

/* ===============================
   REUSABLE INFO SECTION
   =============================== */
function InfoSection({ title, text, image, reverse = false }) {
  return (
    <section className="max-w-7xl mx-auto py-14 sm:py-18 px-6">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3
            className="font-[var(--font-heading)]
                       uppercase tracking-widest
                       text-2xl sm:text-3xl
                       text-[var(--color-primary)] mb-5"
          >
            {title}
          </h3>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
            {text}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-[260px] sm:h-[320px] lg:h-[360px]
              object-cover
              border border-white/10
            "
          />

          {/* subtle image accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
