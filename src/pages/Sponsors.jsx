import { motion } from "framer-motion";

/* =========================
   IMAGES
========================= */
import team from "../assets/images/race10.jpg";

import bajaj from "../assets/images/BAJAJ.png";
import anand from "../assets/images/ANAND.png";
import ansys from "../assets/images/ANSYS.png";
import arai from "../assets/images/ARAI.png";
import force from "../assets/images/FORCE.png";
import gabriel from "../assets/images/Gabriel.png";
import mahindra from "../assets/images/output-onlinepngtools (1).png";
import mathworks from "../assets/images/MATHSWORK.png";
import tvs from "../assets/images/TVS.png";
import atlas from "../assets/images/ATLASCOPCO.png";
import redbull from "../assets/images/redbull-logo-svgrepo-com (1).svg";
import shaper from "../assets/images/Shaper.png";
import solidworks from "../assets/images/Solidworks.png";

/* =========================
   DATA
========================= */

const titleSponsor = {
  name: "BAJAJ",
  image: bajaj,
  link: "https://www.bajajauto.com/",
};

const industryPartners = [
  { name: "ANAND", image: anand, link: "https://www.anandgroupindia.com/" },
  { name: "ANSYS", image: ansys, link: "https://www.ansys.com/" },
  { name: "ARAI", image: arai, link: "https://www.araiindia.com/" },
  { name: "FORCE", image: force, link: "https://www.forcemotors.com/" },
  {
    name: "GABRIEL",
    image: gabriel,
    link: "https://www.anandgroupindia.com/gabrielindia",
  },
  { name: "MAHINDRA", image: mahindra, link: "https://www.mahindra.com/" },
  { name: "MATHWORKS", image: mathworks, link: "https://www.mathworks.com/" },
  { name: "TVS", image: tvs, link: "https://www.tvsmotor.com/" },
  { name: "ATLASCOPCO", image: atlas, link: "https://www.atlascopco.com/" },
  { name: "REDBULL", image: redbull, link: "https://www.redbull.com/" },
  {
    name: "SHAPER",
    image: shaper,
    link: "https://in.linkedin.com/company/shaper-abrasives",
  },
  {
    name: "SOLIDWORKS",
    image: solidworks,
    link: "https://www.solidworks.com/",
  },
];

const pastSponsors = [
  bajaj,
  anand,
  ansys,
  arai,
  force,
  gabriel,
  mahindra,
  mathworks,
  tvs,
  atlas,
  redbull,
  shaper,
  solidworks,
];

/* =========================
   PAGE
========================= */

export default function Sponsors() {
  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: "calc(100vh - var(--nav-height))",
          marginTop: "var(--nav-height)",
        }}
      >
        <img
          src={team}
          alt="Team Nemesis Sponsors"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/1 to-transparent" /> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            A Warm Heartfelt Thanks
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-white/90 leading-relaxed max-w-3xl">
            We are deeply grateful to our sponsors for their unwavering support
            and belief in our vision. Your partnership enables us to push
            engineering boundaries, compete at the highest level, and represent
            our institution with pride.
          </p>
        </motion.div>
      </section>

      {/* ================= TITLE SPONSOR ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading uppercase tracking-widest text-xl text-[var(--color-primary)] mb-10">
            Title Sponsor
          </h2>

          <a
            href={titleSponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              bg-white
              rounded-xl
              px-14 py-10
              shadow-md
              hover:shadow-lg
              hover:scale-[1.03]
              transition
            "
          >
            <img
              src={titleSponsor.image}
              alt={titleSponsor.name}
              className="h-16 object-contain"
            />
          </a>
        </div>
      </section>

      {/* ================= INDUSTRY PARTNERS ================= */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center font-heading uppercase tracking-widest text-xl text-[var(--color-primary)] mb-12">
            Industry Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {industryPartners.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white
                  rounded-lg
                  h-24 w-full max-w-[200px]
                  flex items-center justify-center
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition
                "
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="max-h-14 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PAST SPONSORS ================= */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center font-heading uppercase tracking-widest text-xl text-red-600 mb-12">
            Past Sponsors
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
            {pastSponsors.map((logo, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-md
                  h-16
                  flex items-center justify-center
                  opacity-90
                  hover:opacity-100
                  transition
                "
              >
                <img
                  src={logo}
                  alt="Past Sponsor"
                  className="max-h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
