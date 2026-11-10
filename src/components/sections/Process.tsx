import { motion } from "framer-motion";
import { Cpu, Palette, Layout, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "AI-Assisted Exploration",
    description: "Explore ideas, visual directions, and conceptual possibilities with AI-assisted tools at high velocity.",
    icon: Cpu,
    tag: "Generative Ideation"
  },
  {
    num: "02",
    title: "Art Direction & Selection",
    description: "Develop promising concepts through rigorous human art direction, visual judgment, and brand alignment.",
    icon: Palette,
    tag: "Creative Direction"
  },
  {
    num: "03",
    title: "Typographic & Grid Refinement",
    description: "Refine typography, composition, hierarchy, spatial alignment, and visual consistency across assets.",
    icon: Layout,
    tag: "Precision Design"
  },
  {
    num: "04",
    title: "Multi-Format Delivery",
    description: "Deliver considered creative work across every format a brand needs—from print to interactive web.",
    icon: Sparkles,
    tag: "Production Ready"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-warm-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-charcoal-black/50 mb-4 block uppercase"
          >
            03 / AI + Human Creativity
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-charcoal-black max-w-4xl"
          >
            AI accelerates exploration.
            <br />
            <span className="text-electric-lime bg-charcoal-black px-3 py-1 inline-block mt-2">
              Design gives it direction.
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white border-2 border-charcoal-black p-8 flex flex-col justify-between min-h-[320px] transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#111111]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl font-black font-mono text-charcoal-black/30 group-hover:text-electric-lime transition-colors">
                      {step.num}
                    </span>
                    <div className="p-3 bg-warm-off-white border border-charcoal-black group-hover:bg-electric-lime transition-colors">
                      <Icon className="w-5 h-5 text-charcoal-black" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-charcoal-black/5 text-charcoal-black mb-4">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-bold text-charcoal-black mb-3 group-hover:text-charcoal-black">
                    {step.title}
                  </h3>

                  <p className="text-sm text-charcoal-black/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal-black/10 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-charcoal-black/40 uppercase tracking-widest">
                    Phase {idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-charcoal-black/20 group-hover:bg-electric-lime transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;