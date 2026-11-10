import { brandCampaignFormats } from "../../data/portfolioData";

const CrossPlatform = () => {
  return (
    <section className="py-16 md:py-20 bg-warm-off-white text-charcoal-black relative overflow-hidden border-b border-charcoal-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="relative mb-4 inline-flex items-center justify-center gap-3 text-xs font-bold tracking-[0.3em] text-charcoal-black/50 uppercase before:h-px before:w-6 before:bg-electric-lime after:h-px after:w-6 after:bg-electric-lime">
            09 / Cross-Platform Consistency
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
            One creative vision. Multiple possibilities.
          </h2>
          <p className="text-lg text-charcoal-black/70">
            How a single visual identity adapts seamlessly across poster, carousel, brochure, packaging, banner, and website without losing consistency.
          </p>
          <div className="mt-4 inline-block bg-charcoal-black text-electric-lime text-xs font-mono font-bold uppercase tracking-widest px-3 py-1">
            SAMPLE BRAND CONCEPT
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {brandCampaignFormats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-charcoal-black p-5 sm:p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#111111] transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-black/50">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-electric-lime bg-charcoal-black px-2 py-0.5">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.format}</h3>
                <p className="text-sm text-charcoal-black/70 mb-6">{item.description}</p>
              </div>

              <div className="aspect-[4/3] border border-charcoal-black overflow-hidden bg-charcoal-black">
                <img
                  src={item.image}
                  alt={item.format}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossPlatform;