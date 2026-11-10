import { Button } from "../ui/Button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal-black text-warm-off-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-4 block uppercase">
          11 / Contact
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Have an idea? Let's make it visible.
        </h2>
        <p className="text-lg md:text-xl mb-12 text-warm-off-white/70 leading-relaxed">
          Tell us what you're building. Let's explore what we can create together.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="p-8 border border-warm-off-white/10 bg-warm-off-white/5">
            <h3 className="text-sm font-bold text-electric-lime mb-4 uppercase tracking-widest">Our Studio</h3>
            <p className="font-mono text-sm">HELLO@BEYONDTHEBRIEF.STUDIO</p>
            <p className="mt-2 font-mono text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="p-8 border border-warm-off-white/10 bg-warm-off-white/5">
            <h3 className="text-sm font-bold text-electric-lime mb-4 uppercase tracking-widest">Follow Us</h3>
            <p className="font-mono text-sm">Instagram: @beyondthebrief</p>
            <p className="mt-2 font-mono text-sm">Behance: beyondthebrief</p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="font-semibold text-base"
        >
          Start a Conversation
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;