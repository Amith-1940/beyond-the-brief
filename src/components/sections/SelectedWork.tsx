import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

const SelectedWork = ({ onSelectProject }: SelectedWorkProps) => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "campaigns", label: "Campaign Posters" },
    { id: "carousels", label: "Carousels" },
    { id: "editorial", label: "Editorial & Print" },
    { id: "packaging", label: "Packaging" },
    { id: "banners", label: "Banners" },
    { id: "digital", label: "Digital UI/UX" },
    { id: "prototypes", label: "Prototypes" }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.categoryId === filter);

  return (
    <section id="selected-work" className="py-24 bg-charcoal-black text-warm-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-electric-lime mb-4 block uppercase"
            >
              04 / Selected Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-warm-off-white"
            >
              A collection of ideas,
              <br />
              <span className="text-electric-lime">made visible.</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2 max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
                  filter === cat.id
                    ? "bg-electric-lime text-charcoal-black border-electric-lime"
                    : "bg-transparent text-warm-off-white/70 border-warm-off-white/20 hover:border-warm-off-white hover:text-warm-off-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer bg-warm-off-white/5 border border-warm-off-white/10 overflow-hidden flex flex-col justify-between hover:border-electric-lime transition-all duration-500 ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-black/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-electric-lime text-charcoal-black text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-charcoal-black/80 backdrop-blur-md border border-warm-off-white/20 text-warm-off-white text-[10px] font-mono tracking-widest uppercase px-3 py-1">
                    SAMPLE CONCEPT
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-mono tracking-widest text-electric-lime uppercase">
                        {project.category}
                      </span>
                      {project.year && (
                        <span className="text-xs font-mono text-warm-off-white/40">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-warm-off-white mb-2 group-hover:text-electric-lime transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-warm-off-white/60 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-warm-off-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-warm-off-white/40 uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;