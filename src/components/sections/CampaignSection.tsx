import { publicAsset } from "../../lib/publicAsset";
import { motion } from "framer-motion";

const CampaignSection = () => {
  return (
    <section className="py-16 md:py-20 bg-warm-off-white text-charcoal-black relative overflow-hidden border-b border-charcoal-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="relative mb-4 inline-flex items-center pl-10 text-xs font-bold tracking-[0.3em] text-charcoal-black/50 uppercase after:absolute after:left-0 after:top-1/2 after:h-px after:w-6 after:-translate-y-1/2 after:bg-electric-lime">
              05 / Campaign Design
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Make the first impression count.
            </h2>
            <p className="text-lg text-charcoal-black/70 leading-relaxed mb-8">
              We design fictional sample posters and social campaign artwork across multiple visual styles. By combining strong typography, art-directed imagery, and finished compositions, we establish a commanding visual presence for brands.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-charcoal-black/10">
              <div>
                <h4 className="font-bold text-xl mb-2">Visual Range</h4>
                <p className="text-sm text-charcoal-black/60">From brutalist typography to clean modernist grids.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Multi-Format</h4>
                <p className="text-sm text-charcoal-black/60">Optimized for outdoor billboards, social carousels, and press.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] border-2 border-charcoal-black bg-charcoal-black overflow-hidden relative shadow-[12px_12px_0px_0px_#C7FF3D]">
              <img
                src={publicAsset("images/sample-poster-01.jpg")}
                alt="Campaign Poster Sample"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-electric-lime text-charcoal-black text-[10px] font-mono font-bold tracking-widest px-3 py-1">
                SAMPLE CONCEPT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;