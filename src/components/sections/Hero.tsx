import { publicAsset } from "../../lib/publicAsset";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-charcoal-black/50 mb-6 uppercase">
                Creative Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-charcoal-black mb-8"
            >
              Beyond the
              <br />
              <span className="relative inline-block">
                <span className="text-electric-lime relative">
                  Brief
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl text-charcoal-black/70 max-w-xl mb-10 leading-relaxed"
            >
              We turn ideas into visual experiences through creative thinking, AI-assisted exploration, and thoughtful design execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group font-semibold text-base"
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-base"
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-electric-lime/20 rounded-sm -rotate-2" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-charcoal-black bg-charcoal-black">
                <img
                  src={publicAsset("images/hero-collage.svg")}
                  alt="Beyond the Brief creative collage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-charcoal-black bg-warm-off-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-electric-lime">7+</div>
                  <div className="text-xs font-bold tracking-wider text-charcoal-black/60 uppercase">Categories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs font-bold tracking-widest text-charcoal-black/40 uppercase">Scroll</span>
        <div className="w-px h-12 bg-charcoal-black/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-electric-lime animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;