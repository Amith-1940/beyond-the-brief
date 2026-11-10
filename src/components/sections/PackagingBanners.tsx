const PackagingBanners = () => {
  return (
    <section className="py-24 bg-warm-off-white text-charcoal-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-charcoal-black/50 mb-4 block uppercase">
            07 / Packaging & Large-Format
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
            Made to be seen. Designed to be remembered.
          </h2>
          <p className="text-lg text-charcoal-black/70 max-w-2xl">
            From product labels and unboxing experiences to event banners and spatial exhibition systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white border-2 border-charcoal-black p-8 flex flex-col justify-between">
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
                src="/images/sample-packaging-01.svg"
                alt="Packaging Concept"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white border-2 border-charcoal-black p-8 flex flex-col justify-between">
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
                src="/images/sample-banner-01.svg"
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