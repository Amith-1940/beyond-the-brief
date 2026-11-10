import React from 'react';
import { CarouselSlide } from './CarouselSlide';

export const Slide5 = () => {
  return (
    <CarouselSlide bgColor="bg-[#0a0a0c]">
      <div className="p-16 flex flex-col justify-between h-full relative">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs tracking-[0.2em] text-[#c5a059]">05 // COLLABORATE</span>
          <span className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest">[GET IN TOUCH]</span>
        </div>

        <div className="my-auto">
          <h2 className="text-[100px] leading-[0.95] font-serif font-light mb-8">
            HAVE A STORY<br /> WORTH TELLING?
          </h2>
          <div className="inline-block border-b border-[#c5a059] pb-2">
            <p className="text-4xl font-serif italic text-[#c5a059]">
              LET'S MAKE IT MOVE.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end pt-12 border-t border-[#f4f4f5]/10">
          <div>
            <p className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest">Studio Inquiry</p>
            <p className="font-mono text-sm text-[#f4f4f5] mt-1">hello@beyondthebrief.studio</p>
          </div>
          <div className="text-right">
             <p className="font-mono text-xs text-[#a1a1aa] uppercase tracking-widest">Instagram</p>
             <p className="font-mono text-sm text-[#c5a059] mt-1">@beyondthebrief</p>
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
