import React from 'react';
import { CarouselSlide } from './CarouselSlide';

export const Slide4 = () => {
  return (
    <CarouselSlide>
      <div className="p-16 flex flex-col h-full">
        <div className="mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-[#c5a059]">04 // POST-PRODUCTION</span>
        </div>
        <div className="relative flex-1">
          <h2 className="text-[110px] leading-[0.9] font-serif font-light z-20 relative">
            THE MAGIC<br /> HAPPENS<br /> <span className="italic">BETWEEN</span><br /> <span className="text-[#c5a059]">CUTS.</span>
          </h2>
          <div className="absolute top-1/2 right-0 w-[600px] h-[400px] -translate-y-1/2 z-10">
            <img
              src="https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=2160&auto=format&fit=crop"
              alt="Editing suite"
              crossOrigin="anonymous"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Timeline UI Elements */}
            <div className="absolute -bottom-12 left-0 right-0 h-1 bg-[#f4f4f5]/20">
               <div className="w-1/3 h-full bg-[#c5a059]"></div>
            </div>
            <div className="absolute -bottom-20 left-0 flex space-x-1">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className={`h-4 w-[2px] ${i % 5 === 0 ? 'bg-[#f4f4f5]/40' : 'bg-[#f4f4f5]/10'}`}></div>
               ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-12">
           <p className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest max-w-[300px]">
            The art of pacing, rhythm, and visual storytelling.
          </p>
          <div className="font-mono text-[10px] text-[#f4f4f5]/40">
            [EXPORT_FINAL_v2_RENDER]
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
