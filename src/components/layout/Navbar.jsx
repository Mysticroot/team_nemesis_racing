import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/images/NEMESIS HQ11whitey.png";

const navItems = ["Home", "About", "Achievements", "Sponsors", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y < 80);

      if (y < lastScrollY || y < 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setIsOpen(false);
      }
      setLastScrollY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navbarBg =
    isHome && isAtTop
      ? "bg-[color:var(--color-bg)]/40"
      : "bg-[color:var(--color-bg)]/95 border-b border-white/10";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 ${navbarBg}`}
    >
      {/* BAR */}
      <div className="flex items-center h-16 px-4 sm:px-8 lg:px-14">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Team Nemesis Racing"
            className="h-7 sm:h-9 lg:h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div
          className="hidden md:flex ml-14 gap-10
                     font-[var(--font-heading)]
                     uppercase tracking-[0.12em]"
        >
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`relative text-sm transition-colors
                  ${
                    active
                      ? "text-[color:var(--color-primary)]"
                      : "text-white/80 hover:text-white"
                  }`}
              >
                {item}
                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] w-full
                    bg-[color:var(--color-primary)]
                    transition-transform duration-300 origin-left
                    ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex-grow" />

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white/90 hover:text-white"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-y-0 right-0 w-4/5 sm:w-1/2
                   bg-[color:var(--color-bg)]
                   border-l border-white/10
                   z-[60]"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
          >
            <X size={26} />
          </button>
        </div>

        <nav
          className="mt-10 flex flex-col items-center gap-8
                     font-[var(--font-heading)]
                     uppercase tracking-widest"
        >
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors
                  ${
                    active
                      ? "text-[color:var(--color-primary)]"
                      : "text-white/80 hover:text-white"
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </motion.nav>
  );
}
