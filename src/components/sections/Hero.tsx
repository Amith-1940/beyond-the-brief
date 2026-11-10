import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const services = [
  "Branding",
  "Digital Design",
  "Print Design",
  "Social Media",
  "UI/UX",
];

const HeroArtwork = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <motion.svg
    aria-hidden="true"
    viewBox="0 0 280 280"
    className="aspect-square w-full text-electric-lime"
    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
  >
    <motion.circle
      cx="140"
      cy="140"
      r="116"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={reduceMotion ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.12 }}
    />
    <motion.circle
      cx="89"
      cy="91"
      r="39"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={reduceMotion ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.28 }}
    />
    <motion.circle
      cx="188"
      cy="183"
      r="49"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={reduceMotion ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: reduceMotion ? 0 : 1, delay: 0.4 }}
    />
    <path d="M24 140h74M140 24v74M182 183h55" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <rect x="183" y="49" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </motion.svg>
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-warm-off-white pt-16 text-charcoal-black">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-12 pt-10 sm:px-8 md:gap-12 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-10">
        <div className="relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-charcoal-black/60 uppercase">
              <span aria-hidden="true" className="h-0.5 w-8 bg-electric-lime" />
              Creative Studio
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}
            className="mb-6 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.055em] text-charcoal-black"
          >
            Beyond
            <br />
            the{" "}
            <span className="inline-block bg-electric-lime px-2.5 pb-1 pt-0.5 text-charcoal-black">
              Brief
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="mb-8 max-w-xl text-base leading-relaxed text-charcoal-black/70 sm:text-lg"
          >
            We turn ideas into visual experiences through creative thinking, AI-assisted exploration, and thoughtful design execution.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              type="button"
              onClick={() => scrollTo("selected-work")}
              variant="primary"
              size="lg"
              className="group rounded-none border-2 border-charcoal-black font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111111] active:translate-y-0 active:shadow-none motion-reduce:transform-none sm:px-5"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              type="button"
              onClick={() => scrollTo("contact")}
              variant="outline"
              size="lg"
              className="rounded-none border-2 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111111] active:translate-y-0 active:shadow-none motion-reduce:transform-none sm:px-5"
            >
              Let's Talk
            </Button>
          </motion.div>
        </div>

        <motion.aside
          aria-label="Design services and visual index"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          className="mx-auto mt-2 grid w-full max-w-[34rem] grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center gap-4 sm:gap-6 lg:mt-0 lg:gap-8"
        >
          <div className="relative mx-auto w-full max-w-[17rem]">
            <HeroArtwork reduceMotion={shouldReduceMotion} />
          </div>

          <div className="min-w-0">
            <p className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal-black/55 sm:text-[10px]">
              <span aria-hidden="true" className="h-px w-5 bg-electric-lime" />
              Services / 05
            </p>
            <ol className="divide-y divide-charcoal-black/15 border-y border-charcoal-black/20">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="group flex min-h-[2rem] items-center gap-2 py-1.5 text-[11px] font-semibold tracking-[-0.01em] transition-colors duration-200 hover:text-charcoal-black/60 sm:min-h-[2.2rem] sm:text-xs"
                >
                  <span className="font-mono text-[9px] tabular-nums text-charcoal-black/45 sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">{service}</span>
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-electric-lime transition-transform duration-200 group-hover:rotate-45 motion-reduce:transition-none" />
                </li>
              ))}
            </ol>
          </div>
        </motion.aside>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-xs font-bold tracking-widest text-charcoal-black/40 uppercase">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-charcoal-black/20">
          <div className="absolute left-0 top-0 h-1/2 w-full bg-electric-lime animate-pulse motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
