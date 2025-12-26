 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";

 import his1 from "../../assets/images/his1.jpg";
 import his2 from "../../assets/images/his2.jpg";

 export default function HistorySection() {
   return (
     <section
       className="
  relative
  bg-[var(--color-bg)]
  py-12
  overflow-hidden
  border-t border-white/10
"
     >
       {/* subtle background accent */}
       <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 pointer-events-none" />

       <div
         className="
  relative
  max-w-7xl mx-auto
  px-4 sm:px-8
  py-10 sm:py-12
  grid grid-cols-1 md:grid-cols-2
  gap-14 items-center

  bg-gradient-to-br
  from-[#0b1d2d]/70
  via-black/60
  to-black/80

  border border-white/10
"
       >
         {/* TEXT */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true }}
         >
           {/* label */}
           <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
             Competition Vehicle
           </p>

           {/* car name */}
           <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-extrabold text-white">
             MK<span className="text-[var(--color-primary)]">-X9</span>
           </h2>

           {/* meta */}
           <p className="mt-3 text-sm uppercase tracking-widest text-white/60">
             SAEINDIA e-BAJA 2025 · 8th Overall
           </p>

           {/* description */}
           <p className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
             The MK-X9 marked a significant step forward in Team Nemesis
             Racing’s electric ATV program. Featuring enhanced battery
             packaging, optimized suspension geometry, and a refined
             dual-gearbox drivetrain, the platform was developed through
             rigorous simulation and real-world testing to improve reliability
             and on-track performance.
           </p>

           {/* CTA */}
           <Link
             to="/achievements"
             className="inline-flex items-center gap-3 mt-10
                       text-xs uppercase tracking-[0.3em]
                       text-white/80 hover:text-[var(--color-primary)]
                       transition-colors"
           >
             <span className="h-[1px] w-10 bg-white/40" />
             View Achievements
           </Link>
         </motion.div>

         {/* IMAGES */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
           viewport={{ once: true }}
           className="relative"
         >
           {/* main image */}
           <img
             src={his1}
             alt="MK-X9 track view"
             className="w-full h-72 sm:h-80 lg:h-[420px]
                       object-cover rounded-sm
                       border border-white/10"
           />

           {/* floating image */}
           <img
             src={his2}
             alt="MK-X9 action detail"
             className="absolute -bottom-10 -left-10
                       w-48 h-32 sm:w-56 sm:h-36
                       object-cover rounded-sm
                       border border-white/20
                       shadow-xl"
           />
         </motion.div>
       </div>
     </section>
   );
 }
