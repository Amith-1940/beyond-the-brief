import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "Selected Work", href: "#selected-work" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-charcoal-black/10 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-off-white/95 backdrop-blur-md py-3 shadow-sm"
          : "bg-warm-off-white/90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#hero" className="flex shrink-0 items-center gap-2.5 group">
          <span className="w-3 h-3 bg-electric-lime border border-charcoal-black inline-block group-hover:rotate-45 transition-transform" />
          <span className="font-extrabold tracking-tight text-base sm:text-lg text-charcoal-black">
            BEYOND THE BRIEF
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative whitespace-nowrap py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-electric-lime after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime focus-visible:ring-offset-4 ${
                  isActive
                    ? "text-charcoal-black after:scale-x-100"
                    : "text-charcoal-black/65 after:scale-x-0 hover:text-charcoal-black hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center">
          <a href="#contact">
            <Button variant="primary" size="sm" className="font-bold text-xs uppercase tracking-wider">
              Let's Talk
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden -mr-2 rounded-sm p-2 text-charcoal-black transition-colors hover:bg-charcoal-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime focus-visible:ring-offset-2"
          aria-label="Toggle Navigation Menu"
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-charcoal-black/10 bg-warm-off-white px-6 py-5 sm:py-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className="flex items-center justify-between border-b border-charcoal-black/10 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-black transition-colors hover:text-charcoal-black/65"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full bg-electric-lime transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-5 block">
              <Button variant="primary" size="lg" className="w-full font-bold uppercase tracking-wider">
                Let's Talk
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
