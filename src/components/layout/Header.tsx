import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Selected Work", href: "#selected-work" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-off-white/90 backdrop-blur-md border-b border-charcoal-black/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-3 h-3 bg-electric-lime border border-charcoal-black inline-block group-hover:rotate-45 transition-transform" />
          <span className="font-extrabold tracking-tight text-lg text-charcoal-black">
            BEYOND THE BRIEF
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-charcoal-black/70 hover:text-charcoal-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact">
            <Button variant="primary" size="sm" className="font-bold text-xs uppercase tracking-wider">
              Let's Talk
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-black"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-warm-off-white border-b border-charcoal-black px-6 py-8 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-wider text-charcoal-black"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" size="lg" className="w-full font-bold uppercase tracking-wider">
              Let's Talk
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;