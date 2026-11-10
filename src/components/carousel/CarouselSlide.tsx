import React from 'react';

interface CarouselSlideProps {
  children: React.ReactNode;
  bgColor?: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ children, bgColor = "bg-[#0a0a0c]" }) => {
  return (
    <div
      className={`w-[1080px] h-[1350px] ${bgColor} text-[#f4f4f5] relative overflow-hidden flex flex-col`}
    >
      {children}
    </div>
  );
};
