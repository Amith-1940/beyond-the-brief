import React from 'react';
import { CarouselSlide } from './CarouselSlide';

export const Slide2 = () => {
  return (
    <CarouselSlide>
      <div className="flex h-full">
        <div className="w-1/2 p-16 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#c5a059]">02 // CINEMATOGRAPHY</span>
          </div>
          <h2 className="text-[100px] leading-[0.95] font-serif font-light -ml-4">
            EVERY<br /> FRAME<br /> HAS A<br /> PURPOSE.
          </h2>
          <div className="space-y-4">
            <p className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest max-w-[300px]">
              Visual narrative through light, lens, and intentionality.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative bg-[#111]">
           <img
            src="https://images.unsplash.com/photo-1542204172-3f139f400782?q=80&w=2160&auto=format&fit=crop"
            alt="Camera setup"
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          />
          {/* Technical Annotations */}
          <div className="absolute top-8 right-8 text-right font-mono text-[10px] text-[#f4f4f5]/60 uppercase leading-relaxed">
            [ISO 800]<br />
            [T1.4]<br />
            [50mm]
          </div>
          <div className="absolute bottom-8 right-8 text-right font-mono text-[10px] text-[#c5a059]">
            REC ● 00:24:12:08
          </div>
          {/* Framing Lines */}
          <div className="absolute inset-4 border border-[#f4f4f5]/10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-4 right-4 h-px bg-[#f4f4f5]/10 pointer-events-none"></div>
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-[#f4f4f5]/10 pointer-events-none"></div>
        </div>
      </div>
    </CarouselSlide>
  );
};
