import { publicAsset } from "../../lib/publicAsset";
const PackagingBanners = () => {
  return (
    <section className="py-16 md:py-20 bg-warm-off-white text-charcoal-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <span className="relative mb-4 inline-flex items-center pl-10 text-xs font-bold tracking-[0.3em] text-charcoal-black/50 uppercase after:absolute after:left-0 after:top-1/2 after:h-px after:w-6 after:-translate-y-1/2 after:bg-electric-lime">
            07 / Packaging & Large-Format
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
            Made to be seen. Designed to be remembered.
          </h2>
          <p className="text-lg text-charcoal-black/70 max-w-2xl">
            From product labels and unboxing experiences to event banners and spatial exhibition systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="bg-white border-2 border-charcoal-black p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-electric-lime bg-charcoal-black px-3 py-1 mb-6 inline-block">
                PACKAGING DESIGN
              </span>
              <h3 className="text-2xl font-bold mb-4">Tactile Unboxing & Labels</h3>
              <p className="text-sm text-charcoal-black/70 mb-8 leading-relaxed">
                Premium visual compositions and realistic packaging mockups that communicate product quality and brand values before the product is even opened.
              </p>
            </div>
            <div className="aspect-[4/3] border border-charcoal-black overflow-hidden relative">
              <img
                src={publicAsset("images/sample-packaging-01.jpg")}
                alt="Packaging Concept"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white border-2 border-charcoal-black p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-electric-lime bg-charcoal-black px-3 py-1 mb-6 inline-block">
                LARGE FORMAT & EXHIBITION
              </span>
              <h3 className="text-2xl font-bold mb-4">Environmental & Banners</h3>
              <p className="text-sm text-charcoal-black/70 mb-8 leading-relaxed">
                Event graphics, booth displays, wayfinding, and large format banners designed with attention to scale, sightlines, and environmental impact.
              </p>
            </div>
            <div className="aspect-[4/3] border border-charcoal-black overflow-hidden relative">
              <img
                src={publicAsset("images/sample-banner-01.jpg")}
                alt="Banner Exhibition Concept"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingBanners;