import { publicAsset } from "../lib/publicAsset";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryId: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  headline: string;
}

export const categories: Category[] = [
  {
    id: "campaigns",
    title: "Campaign & Social Posters",
    headline: "Make the first impression count.",
    description: "Campaign artwork that demands attention across physical and digital formats."
  },
  {
    id: "carousels",
    title: "Multi-Slide Carousels",
    headline: "Multi-slide storytelling.",
    description: "Multi-slide visual narratives engineered for engagement and swipe-through rates."
  },
  {
    id: "editorial",
    title: "Editorial & Print",
    headline: "Designed beyond the screen.",
    description: "High-finish brochures, flyers, and editorial print that make tactile impressions."
  },
  {
    id: "packaging",
    title: "Packaging & Product Graphics",
    headline: "Made to be seen. Designed to be remembered.",
    description: "Unboxing experiences, product labels, and spatial graphics with distinct identities."
  },
  {
    id: "banners",
    title: "Banners & Exhibition Graphics",
    headline: "Large format impact.",
    description: "Environmental graphics, booth displays, and high-impact event visual systems."
  },
  {
    id: "digital",
    title: "Website UI/UX & Digital",
    headline: "Thoughtful design. Clear experiences.",
    description: "Editorial websites, web applications, and landing pages built for visual performance."
  },
  {
    id: "prototypes",
    title: "Wireframes & Prototypes",
    headline: "From concept to interactive flow.",
    description: "Structural design exploration, low-fidelity wireframes, and interactive user flows."
  }
];

export const projects: Project[] = [
  {
    id: "poster-01",
    title: "AURA Sound Festival 2026",
    subtitle: "Visual Identity & Poster Series",
    category: "Campaign & Social Posters",
    categoryId: "campaigns",
    description: "Distinctive festival typography paired with generative artwork for a modern electronic music festival.",
    image: publicAsset("images/sample-poster-01.svg"),
    tags: ["Typography", "Poster Design", "Generative Art", "Branding"],
    client: "AURA Events",
    year: "2026",
    featured: true
  },
  {
    id: "carousel-01",
    title: "Future of AI Creative Collaboration",
    subtitle: "Educational Instagram Carousel",
    category: "Multi-Slide Carousels",
    categoryId: "carousels",
    description: "An 8-slide educational visual sequence breaking down human-AI creative workflows into digestable concepts.",
    image: publicAsset("images/sample-carousel-01.svg"),
    tags: ["Social Design", "Carousel", "Infographic", "Editorial"],
    client: "Design Digest",
    year: "2026",
    featured: true
  },
  {
    id: "brochure-01",
    title: "KINETIC Architecture Monograph",
    subtitle: "Editorial Publication & Brochure",
    category: "Editorial & Print",
    categoryId: "editorial",
    description: "A 48-page architectural publication showcasing brutalist structures through high-contrast typography and layout.",
    image: publicAsset("images/sample-brochure-01.svg"),
    tags: ["Print", "Editorial", "Layout", "Typography"],
    client: "Kinetic Studio",
    year: "2025",
    featured: true
  },
  {
    id: "packaging-01",
    title: "OASIS Botanical Skincare",
    subtitle: "Packaging & Glassware Identity",
    category: "Packaging & Product Graphics",
    categoryId: "packaging",
    description: "Minimalist skincare packaging utilizing embossed recycled paper and custom glass bottle silhouettes.",
    image: publicAsset("images/sample-packaging-01.svg"),
    tags: ["Packaging", "3D Mockup", "Sustainability", "Print"],
    client: "Oasis Botanicals",
    year: "2026",
    featured: true
  },
  {
    id: "banner-01",
    title: "SYNAPSE Tech Expo 2026",
    subtitle: "Large Format Exhibition Graphics",
    category: "Banners & Exhibition Graphics",
    categoryId: "banners",
    description: "A 12-meter entrance banner and wayfinding system for a global technology conference in Tokyo.",
    image: publicAsset("images/sample-banner-01.svg"),
    tags: ["Large Format", "Environmental", "Wayfinding", "Banner"],
    client: "Synapse Expo",
    year: "2026",
    featured: false
  },
  {
    id: "website-01",
    title: "SOLARIS Renewable OS",
    subtitle: "Interactive Web Platform",
    category: "Website UI/UX & Digital",
    categoryId: "digital",
    description: "An editorial web application dashboard providing real-time data visualizations for clean energy microgrids.",
    image: publicAsset("images/sample-website-01.svg"),
    tags: ["UI/UX", "Web Design", "Dashboard", "Interactive"],
    client: "Solaris Energy",
    year: "2026",
    featured: true
  },
  {
    id: "prototype-01",
    title: "FORM Mobile Commerce Flow",
    subtitle: "Wireframes & High-Fidelity Prototype",
    category: "Wireframes & Prototypes",
    categoryId: "prototypes",
    description: "Structural UX research and interactive prototyping for a high-end luxury furniture mobile shopping app.",
    image: publicAsset("images/sample-prototype-01.svg"),
    tags: ["UX Design", "Wireframes", "Prototyping", "User Testing"],
    client: "Form Living",
    year: "2025",
    featured: false
  }
];

export const brandCampaignFormats = [
  {
    format: "Campaign Poster",
    type: "Print / Outdoor",
    image: publicAsset("images/sample-poster-01.svg"),
    description: "Key art poster establishing the master visual direction."
  },
  {
    format: "Social Carousel",
    type: "Digital / Social",
    image: publicAsset("images/sample-carousel-01.svg"),
    description: "Multi-slide story expanding on key brand pillars."
  },
  {
    format: "Brand Editorial",
    type: "Print Collateral",
    image: publicAsset("images/sample-brochure-01.svg"),
    description: "Tactile publication for press and VIP partners."
  },
  {
    format: "Product Packaging",
    type: "Physical Design",
    image: publicAsset("images/sample-packaging-01.svg"),
    description: "Unboxing experience applying the brand system."
  },
  {
    format: "Large Format Banner",
    type: "Spatial Graphic",
    image: publicAsset("images/sample-banner-01.svg"),
    description: "Event banner scaling the visual identity."
  },
  {
    format: "Digital Experience",
    type: "Web / Mobile",
    image: publicAsset("images/sample-website-01.svg"),
    description: "Interactive landing page capturing the campaign."
  }
];