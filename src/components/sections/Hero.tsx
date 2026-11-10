import { publicAsset } from "../../lib/publicAsset";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-[16%] left-1/2 hidden w-px bg-charcoal-black/[0.035] md:block">
        <span className="absolute -left-1 top-0 h-px w-2 bg-electric-lime/50" />
        <span className="absolute -left-1 bottom-0 h-px w-2 bg-charcoal-black/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-8 lg:gap-16">
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
              className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-3 lg:gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group rounded-none border-2 border-charcoal-black font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111111] active:translate-y-0 active:shadow-none motion-reduce:transform-none md:px-4 lg:px-8"
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none border-2 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111111] active:translate-y-0 active:shadow-none motion-reduce:transform-none md:px-4 lg:px-8"
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>

          <div className="relative mt-2 md:mt-0">
            <div aria-hidden="true" className="absolute -top-7 left-0 right-0 flex items-center justify-between gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-charcoal-black/50 sm:text-[10px] sm:tracking-[0.18em]">
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-4 bg-electric-lime" />
                Selected work
              </span>
              <span className="text-right">Print / Brand / Digital</span>
            </div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985, rotate: -0.75 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-electric-lime" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-charcoal-black bg-charcoal-black">
                <img
                  src={publicAsset("images/hero-collage.jpg")}
                  alt="Beyond the Brief creative collage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 flex h-28 w-28 items-center justify-center border-2 border-charcoal-black bg-electric-lime text-charcoal-black md:-bottom-5 md:-right-5 md:h-36 md:w-36">
                <div className="text-center">
                  <div className="text-4xl font-bold leading-none md:text-5xl">7+</div>
                  <div className="mt-2 text-xs font-bold tracking-wider uppercase">Categories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
