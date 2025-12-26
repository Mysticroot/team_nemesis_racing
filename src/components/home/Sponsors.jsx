import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import bajaj from "../../assets/images/BAJAJ.png";
import anand from "../../assets/images/ANAND.png";
import ansys from "../../assets/images/ANSYS.png";
import arai from "../../assets/images/ARAI.png";
import force from "../../assets/images/FORCE.png";
import gabriel from "../../assets/images/Gabriel.png";
import mahindra from "../../assets/images/output-onlinepngtools (1).png";
import mathworks from "../../assets/images/MATHSWORK.png";
import tvs from "../../assets/images/TVS.png";
import atlas from "../../assets/images/ATLASCOPCO.png";
import redbull from "../../assets/images/redbull-logo-svgrepo-com (1).svg";
import shaper from "../../assets/images/Shaper.png";
import solidworks from "../../assets/images/Solidworks.png";

const sponsors = [
  {
    name: "BAJAJ",
    logo: bajaj,
    tier: "title",
    url: "https://www.bajajauto.com/",
  },
  { name: "ANAND", logo: anand, url: "https://www.anandgroupindia.com/" },
  { name: "ANSYS", logo: ansys, url: "https://www.ansys.com/" },
  { name: "ARAI", logo: arai, url: "https://www.araiindia.com/" },
  { name: "FORCE", logo: force, url: "https://www.forcemotors.com/" },
  {
    name: "GABRIEL",
    logo: gabriel,
    url: "https://www.anandgroupindia.com/gabrielindia",
  },
  { name: "MAHINDRA", logo: mahindra, url: "https://www.mahindra.com/" },
  { name: "MATHWORKS", logo: mathworks, url: "https://www.mathworks.com/" },
  { name: "TVS", logo: tvs, url: "https://www.tvsmotor.com/" },
  { name: "ATLASCOPCO", logo: atlas, url: "https://www.atlascopco.com/" },
  { name: "REDBULL", logo: redbull, url: "https://www.redbull.com/" },
  {
    name: "SHAPER",
    logo: shaper,
    url: "https://in.linkedin.com/company/shaper-abrasives",
  },
  { name: "SOLIDWORKS", logo: solidworks, url: "https://www.solidworks.com/" },
];

export default function SponsorsSection() {
  const titleSponsor = sponsors.find((s) => s.tier === "title");
  const partners = sponsors.filter((s) => s.tier !== "title");

  return (
    <section className="bg-black py-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-2xl sm:text-3xl uppercase tracking-widest font-[var(--font-heading)]">
            Sponsors & Partners
          </h2>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition"
          >
            Become a Sponsor <ArrowRight size={14} />
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />

        {/* TITLE SPONSOR */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-center w-[180px] h-[80px]">
            <img
              src={titleSponsor.logo}
              alt={titleSponsor.name}
              className="max-h-full max-w-full object-contain brightness-0 invert"
            />
          </div>
        </div>

        {/* PARTNERS GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-y-8
            gap-x-8
            justify-items-center
          "
        >
          {partners.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                w-[120px] h-[56px]
                sm:w-[140px] sm:h-[64px]
              "
            >
              <img
                src={s.logo}
                alt={s.name}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  brightness-0 invert
                  opacity-80
                  hover:opacity-100
                  transition
                "
              />
            </a>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-center text-xs uppercase tracking-widest text-white/50">
          Engineering progress through trusted partnerships
        </p>
      </div>
    </section>
  );
}
   