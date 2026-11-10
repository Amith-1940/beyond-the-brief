import React from 'react';
import { CarouselSlide } from './CarouselSlide';

export const Slide1 = () => {
  return (
    <CarouselSlide>
      <img
        src="https://images.unsplash.com/photo-1574266686413-182376246411?q=80&w=2160&auto=format&fit=crop"
        alt="Cinematic shot"
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 p-16 flex flex-col justify-between h-full">
        <div className="text-left">
          <span className="font-mono text-xs tracking-[0.2em] text-[#c5a059]">01 // HERO</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[120px] leading-[0.9] font-serif font-light tracking-tight">
            WE DON'T JUST<br /> SHOOT FILMS.<br /> <span className="italic text-[#c5a059]">WE CREATE<br /> FEELINGS.</span>
          </h1>
        </div>
        <div className="flex justify-between items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa]">Beyond the Brief<br />Production Studio</p>
          <div className="w-12 h-12 border border-[#f4f4f5]/30 rounded-full flex items-center justify-center">
            <span className="text-[10px]">●</span>
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
