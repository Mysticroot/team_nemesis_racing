import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import race from "../assets/images/cocat.jpg";

export default function ContactUs() {
  return (
    <div className="bg-[color:var(--color-bg)] text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={race}
          alt="Contact Team Nemesis Racing"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative z-10
            h-full
            flex flex-col
            items-center justify-center
            text-center
            px-6
            max-w-4xl
            mx-auto
          "
        >
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase font-extrabold text-[var(--color-primary)]">
            Get in Touch
          </h1>

          <p className="mt-6 text-white/85 text-sm sm:text-lg leading-relaxed max-w-2xl">
            Whether you’re exploring sponsorship opportunities or looking to
            collaborate with a competitive engineering team, we’d be glad to
            connect.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT PATHS ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <ContactCard
              eyebrow="For Companies & Brands"
              title="Sponsorship & Partnerships"
              description="Partner with Team Nemesis Racing to support innovation, talent development, and competitive motorsport engineering."
              email="sponsors@nemesisracing.com"
            />

            <ContactCard
              eyebrow="For Media & General Queries"
              title="General Inquiries"
              description="Questions, media requests, or collaboration ideas — reach out and we’ll direct you to the right team member."
              email="contact@nemesisracing.com"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= CONTACT CARD ================= */

function ContactCard({ eyebrow, title, description, email }) {
  return (
    <div
      className="
        group
        relative
        bg-[#111111]
        border border-white/10
        rounded-2xl
        p-12
        text-left
        transition-all duration-300
        hover:border-[var(--color-primary)]/50
      "
    >
      {/* Accent line */}
      <div className="w-12 h-[2px] bg-[var(--color-primary)] mb-6 transition-all duration-300 group-hover:w-20" />

      <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
        {eyebrow}
      </p>

      <h3 className="font-[var(--font-heading)] uppercase tracking-wide text-xl mb-4">
        {title}
      </h3>

      <p className="text-white/75 text-sm leading-relaxed mb-10">
        {description}
      </p>

      {/* CTA */}
      <a
        href={`mailto:${email}`}
        className="
          inline-flex items-center gap-3
          text-sm uppercase tracking-widest font-medium
          px-6 py-3 rounded-lg

          text-[var(--color-primary)]
          border border-[var(--color-primary)]/40

          transition-all duration-300
          group-hover:bg-[var(--color-primary)]
          group-hover:text-black
          group-hover:border-[var(--color-primary)]
        "
      >
        Contact via Email
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
