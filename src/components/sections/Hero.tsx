import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const services = [
  { label: "Branding", kind: "brand" },
  { label: "Digital Design", kind: "digital" },
  { label: "Print Design", kind: "print" },
  { label: "Social Media", kind: "social" },
  { label: "UI/UX", kind: "ui" },
] as const;

type ServiceKind = (typeof services)[number]["kind"];

const ServiceIcon = ({ kind }: { kind: ServiceKind }) => (
  <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-7 w-7 shrink-0 text-charcoal-black sm:h-8 sm:w-8">
    {kind === "brand" && (
      <>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="16" rx="4.5" ry="10" stroke="currentColor" strokeWidth="1.25" />
        <path d="M6 16h20" stroke="currentColor" strokeWidth="1.25" />
      </>
    )}
    {kind === "digital" && (
      <>
        <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5 16h22M16 5v22M8.2 8.2l15.6 15.6M23.8 8.2 8.2 23.8" stroke="currentColor" strokeWidth="1.25" />
      </>
    )}
    {kind === "print" && (
      <>
        <rect x="6" y="6" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="1.25" />
        <rect x="10" y="10" width="12" height="12" rx="6" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="16" cy="16" r="1.25" fill="currentColor" />
      </>
    )}
    {kind === "social" && (
      <>
        <ellipse cx="16" cy="11" rx="10" ry="4" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="21" rx="10" ry="4" stroke="currentColor" strokeWidth="1.25" />
      </>
    )}
    {kind === "ui" && (
      <>
        <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="16" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="16" rx="10" ry="4.5" transform="rotate(60 16 16)" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="16" cy="16" rx="10" ry="4.5" transform="rotate(120 16 16)" stroke="currentColor" strokeWidth="1.25" />
      </>
    )}
  </svg>
);

const HeroArtwork = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <motion.svg
    aria-hidden="true"
    viewBox="0 0 1400 420"
    preserveAspectRatio="none"
    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
    className="pointer-events-none absolute left-0 top-[29%] z-0 h-[13vh] w-full text-electric-lime sm:top-[31%] sm:h-[15vh] lg:top-[51vh] lg:h-[25vh]"
  >
    <motion.ellipse cx="170" cy="220" rx="165" ry="184" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.4, delay: 0.15 }} />
    <motion.ellipse cx="170" cy="220" rx="112" ry="126" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.3 }} />
    <motion.ellipse cx="445" cy="208" rx="196" ry="180" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.4, delay: 0.28 }} />
    <motion.ellipse cx="735" cy="226" rx="178" ry="154" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.45, delay: 0.38 }} />
    <motion.ellipse cx="1010" cy="204" rx="212" ry="174" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.5, delay: 0.48 }} />
    <motion.ellipse cx="1275" cy="220" rx="165" ry="154" fill="none" stroke="currentColor" strokeWidth="3" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.5, delay: 0.58 }} />
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
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden bg-warm-off-white pt-16 text-charcoal-black">
      <HeroArtwork reduceMotion={shouldReduceMotion} />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1600px] flex-col px-6 pb-8 pt-12 sm:px-8 lg:min-h-[100svh] lg:justify-between lg:px-12 lg:pb-[8vh] lg:pt-[16vh] lg:pr-[clamp(22rem,25vw,29rem)]">
        <div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
            className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal-black/65 sm:text-xs"
          >
            <span aria-hidden="true" className="h-px w-8 bg-charcoal-black" />
            Creative Studio <span className="text-charcoal-black/35">/</span> 2026
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.06, ease: "easeOut" }}
            className="relative z-10 text-[clamp(4rem,15.5vw,7.5rem)] font-black leading-[0.78] tracking-[-0.09em] sm:text-[clamp(6rem,15vw,8.5rem)] lg:text-[clamp(7rem,12vw,12rem)]"
          >
            <span className="block">Beyond</span>
            <span className="mt-[0.12em] block whitespace-nowrap">the Brief</span>
          </motion.h1>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
          className="relative z-20 mt-20 flex flex-col gap-6 sm:mt-20 lg:mt-0 lg:items-start lg:gap-5 xl:flex-row xl:items-end xl:gap-8"
        >
          <p className="max-w-md text-sm leading-relaxed text-charcoal-black/75 sm:text-base">
            We turn ideas into visual experiences through creative thinking, AI-assisted exploration, and thoughtful design execution.
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          </div>
        </motion.div>

      </div>

      <aside aria-label="Design services" className="relative z-20 mx-0 mt-8 grid grid-cols-5 border border-charcoal-black/75 bg-electric-lime lg:absolute lg:bottom-0 lg:right-0 lg:top-20 lg:mx-0 lg:mt-0 lg:w-[clamp(18rem,21vw,24rem)] lg:grid-cols-5">
          {services.map((service) => (
            <div key={service.kind} className="group flex min-h-[7.5rem] flex-col items-center border-r border-charcoal-black/60 px-1.5 py-3 last:border-r-0 transition-colors duration-300 hover:bg-warm-off-white/20 motion-reduce:transition-none lg:min-h-0 lg:px-1.5 lg:py-5">
              <ServiceIcon kind={service.kind} />
              <span className="mt-auto max-w-full pt-4 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-[9px] lg:[writing-mode:vertical-rl] lg:rotate-180 lg:pt-0 lg:text-[11px] lg:tracking-[0.12em]">
                {service.label}
              </span>
            </div>
          ))}
      </aside>
    </section>
  );
};

export default Hero;
