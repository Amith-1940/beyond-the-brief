import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-charcoal-black text-warm-off-white border-y border-charcoal-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-6 block uppercase"
            >
              02 / Creative Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-warm-off-white"
            >
              Good design does more than look good.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl lg:text-2xl text-warm-off-white/80 font-light leading-relaxed max-w-2xl"
            >
              Every project starts with an idea. Our job is to find the right visual language, shape the message, and turn it into something people notice and understand.
            </motion.p>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-square border-2 border-warm-off-white/20 p-4 bg-charcoal-black"
            >
              <div className="w-full h-full border border-electric-lime/40 flex flex-col justify-between p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-4xl font-bold text-electric-lime">“</span>
                  <span className="text-xs font-mono tracking-widest text-warm-off-white/40">ESSENCE</span>
                </div>

                <div className="relative z-10 my-auto">
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-warm-off-white leading-snug">
                    CLARITY
                    <br />
                    OVER
                    <br />
                    <span className="text-electric-lime">DECORATION</span>
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-warm-off-white/10 flex justify-between items-center text-xs text-warm-off-white/60">
                  <span>STUDIO MANIFESTO</span>
                  <span>01</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;