import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import logo from "../../assets/images/NEMESIS HQ11whitey.png";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-bg)] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          {/* BRAND */}
          <div className="space-y-5 text-center sm:text-left">
            <img
              src={logo}
              alt="Nemesis Racing"
              className="h-9 mx-auto sm:mx-0"
            />
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Nemesis Racing is a performance-driven motorsport team focused on
              precision, discipline, and continuous improvement.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm mb-4 tracking-widest uppercase font-[var(--font-heading)] text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Pune, India</li>
              <li>+91 98765 XXXXX</li>
              <li>
                <a
                  href="mailto:contact@nemesisracing.com"
                  className="hover:text-[color:var(--color-primary)] transition"
                >
                  contact@nemesisracing.com
                </a>
              </li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm mb-4 tracking-widest uppercase font-[var(--font-heading)] text-white">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/achievements", label: "Achievements" },
                { path: "/sponsors", label: "Sponsors" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm mb-4 tracking-widest uppercase font-[var(--font-heading)] text-white">
              Follow Us
            </h3>

            <div className="flex gap-3 justify-center sm:justify-start">
              {[
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/nemesis.racing",
                  label: "Instagram",
                },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/@teamnemesisracing",
                  label: "YouTube",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/company/team-nemesis-racing/",
                  label: "LinkedIn",
                },
                {
                  icon: FaXTwitter,
                  link: "https://x.com/NemesisRacing",
                  label: "Twitter / X",
                },
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/NemesisRacing",
                  label: "Facebook",
                },
              ].map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="
                    p-2
                    border border-white/20
                    rounded
                    hover:border-[color:var(--color-primary)]
                    hover:bg-[color:var(--color-primary)]/10
                    transition
                  "
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-sm mb-4 tracking-widest uppercase font-[var(--font-heading)] text-white">
              Location
            </h3>

            <div className="overflow-hidden border border-white/10 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.986790379563!2d73.85398177465241!3d18.529499068902513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0883858b873%3A0x1d68fbf2cac75519!2sCOEP%20Technological%20University!5e0!3m2!1sen!2sin!4v1717502913153!5m2!1sen!2sin"
                width="100%"
                height="160"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nemesis Racing Location"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Team Nemesis Racing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
