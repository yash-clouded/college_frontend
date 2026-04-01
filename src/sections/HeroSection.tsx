import { brandLogoSrc } from "@/components/BrandLogo";
import { motion } from "motion/react";

export default function HeroSection() {
  const headline = "Talk to Real College Students";
  const headline2 = "Before Choosing Your College";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Large background mark  -  PNG alpha only, no CSS �Splate⬝ behind it */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
        aria-hidden
      >
        <img
          src={brandLogoSrc}
          alt=""
          width={1024}
          height={1024}
          className="w-[min(92vw,760px)] max-h-[min(58vh,560px)] object-contain object-center opacity-[0.09] select-none bg-transparent"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-foreground">{headline}</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mt-2"
          >
            <span className="gradient-text-multi">{headline2}</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Get honest, unfiltered insights from current undergrads  - {" "}
          <span className="text-foreground font-medium">before you commit to a college.</span>
        </motion.p>


      </div>
    </section>
  );
}