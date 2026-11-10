import { publicAsset } from "../../lib/publicAsset";
const DigitalExperiences = () => {
  return (
    <section className="py-24 bg-charcoal-black text-warm-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-4 block uppercase">
            08 / Digital Experiences
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4 text-warm-off-white">
            Thoughtful design. Clear experiences.
          </h2>
          <p className="text-lg text-warm-off-white/70 max-w-2xl">
            From wireframes and structural user flows to polished desktop and mobile web platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-warm-off-white/5 border border-warm-off-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-charcoal-black bg-electric-lime px-3 py-1 mb-6 inline-block">
                UI/UX & WEB INTERFACES
              </span>
              <h3 className="text-2xl font-bold mb-4 text-warm-off-white">Responsive Web Platforms</h3>
              <p className="text-sm text-warm-off-white/70 mb-8 leading-relaxed">
                Landing pages, editorial web apps, and responsive layouts designed with rigorous typography, grid systems, and functional interactive elements.
              </p>
            </div>
            <div className="aspect-[16/10] border border-warm-off-white/20 overflow-hidden relative bg-charcoal-black">
              <img
                src={publicAsset("images/sample-website-01.jpg")}
                alt="Website UI Interface"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-warm-off-white/5 border border-warm-off-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-charcoal-black bg-electric-lime px-3 py-1 mb-6 inline-block">
                WIREFRAMES & PROTOTYPES
              </span>
              <h3 className="text-2xl font-bold mb-4 text-warm-off-white">Structural UX Research</h3>
              <p className="text-sm text-warm-off-white/70 mb-8 leading-relaxed">
                Low-fidelity wireframes progressing into high-fidelity interactive prototypes, ensuring intuitive user flows and validated information architecture.
              </p>
            </div>
            <div className="aspect-[16/10] border border-warm-off-white/20 overflow-hidden relative bg-charcoal-black">
              <img
                src={publicAsset("images/sample-prototype-01.jpg")}
                alt="Wireframes & Prototypes"
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

export default DigitalExperiences;