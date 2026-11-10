import { motion } from "framer-motion";
import { Search, Compass, PenTool, Sliders, CheckCircle2 } from "lucide-react";

const stages = [
  {
    step: "01",
    title: "Understand",
    desc: "Deconstruct the core objective, brand values, audience psychology, and strategic positioning before a single pixel is moved.",
    icon: Search
  },
  {
    step: "02",
    title: "Explore",
    desc: "AI-accelerated moodboarding, rapid aesthetic prototyping, and diverging visual trajectories to discover unexpected solutions.",
    icon: Compass
  },
  {
    step: "03",
    title: "Create",
    desc: "Translating chosen directions into tangible creative systems: bespoke typography, visual assets, layouts, and art direction.",
    icon: PenTool
  },
  {
    step: "04",
    title: "Refine",
    desc: "Meticulous craft: typographic hierarchy, optical alignment, micro-interactions, color balance, and production mockups.",
    icon: Sliders
  },
  {
    step: "05",
    title: "Deliver",
    desc: "Production-ready assets across all required formats: print collateral, packaging dies, digital platforms, and brand guidelines.",
    icon: CheckCircle2
  }
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-charcoal-black text-warm-off-white relative overflow-hidden border-t border-warm-off-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-4 block uppercase"
          >
            10 / Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-warm-off-white mb-4"
          >
            From your brief to the final detail.
          </motion.h2>
          <p className="text-lg text-warm-off-white/70 max-w-2xl font-light">
            A collaborative, five-stage workflow built to transform raw concepts into refined, high-impact creative deliverables.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-warm-off-white/10 bg-warm-off-white/5 flex flex-col justify-between min-h-[260px] group hover:border-electric-lime transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs font-bold text-electric-lime">{stage.step}</span>
                    <Icon className="w-5 h-5 text-warm-off-white/40 group-hover:text-electric-lime transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-off-white mb-3">{stage.title}</h3>
                  <p className="text-xs text-warm-off-white/60 leading-relaxed font-light">{stage.desc}</p>
                </div>
                <div className="w-full h-1 bg-warm-off-white/10 mt-6 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-electric-lime transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;