import React from 'react';
import { CarouselSlide } from './CarouselSlide';

export const Slide3 = () => {
  return (
    <CarouselSlide>
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#111]">
         <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2160&auto=format&fit=crop"
          alt="Production set"
          crossOrigin="anonymous"
          className="w-full h-full object-cover grayscale brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
      </div>
      <div className="relative z-10 p-16 flex flex-col justify-end h-full">
        <div className="flex justify-between items-start mb-24">
           <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#c5a059]">03 // PRODUCTION</span>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest text-right">
            Full-scale filmmaking.<br />On-set creativity.
          </p>
        </div>
        <h2 className="text-[120px] leading-[0.85] font-serif font-light tracking-tighter max-w-[900px]">
          FROM THE<br /> <span className="text-[#c5a059]">FIRST TAKE</span><br /> TO THE FINAL<br /> FRAME.
        </h2>
      </div>
    </CarouselSlide>
  );
};
