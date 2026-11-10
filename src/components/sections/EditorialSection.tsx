import { motion } from "framer-motion";

const EditorialSection = () => {
  return (
    <section className="py-24 bg-charcoal-black text-warm-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] border-2 border-warm-off-white/20 bg-warm-off-white/5 overflow-hidden relative">
              <img
                src="/images/sample-brochure-01.svg"
                alt="Editorial Print Sample"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-electric-lime text-charcoal-black text-[10px] font-mono font-bold tracking-widest px-3 py-1">
                SAMPLE SPREAD
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-4 block uppercase">
              06 / Editorial & Print
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-warm-off-white">
              Designed beyond the screen.
            </h2>
            <p className="text-lg text-warm-off-white/70 leading-relaxed mb-8">
              Tactile encounters matter. We design brochure spreads, flyer layouts, catalogues, and print collateral using believable mockups and meticulous typographic hierarchy.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-warm-off-white/10 bg-warm-off-white/5">
                <div className="w-2 h-2 rounded-full bg-electric-lime" />
                <span className="font-mono text-sm tracking-wider">Open spreads & close-up typography details</span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-warm-off-white/10 bg-warm-off-white/5">
                <div className="w-2 h-2 rounded-full bg-electric-lime" />
                <span className="font-mono text-sm tracking-wider">Tactile paper finish & embossing simulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;