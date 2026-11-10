import React, { useRef, useState } from 'react';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Slide4 } from './Slide4';
import { Slide5 } from './Slide5';
import * as htmlToImage from 'html-to-image';
import JSZip from 'jszip';

export const CarouselExport: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState('');

  const slideRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const exportSingle = async (index: number) => {
    const ref = slideRefs[index];
    if (!ref.current) return;
    try {
      setExporting(true);
      setExportProgress(`Exporting Slide ${index + 1}...`);
      const dataUrl = await htmlToImage.toPng(ref.current, { cacheBust: true, pixelRatio: 1, crossOrigin: 'anonymous' });
      const link = document.createElement('a');
      link.download = `carousel-slide-0${index + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert('Export failed. Please check console.');
    } finally {
      setExporting(false);
      setExportProgress('');
    }
  };

  const exportAllAsZip = async () => {
    try {
      setExporting(true);
      const zip = new JSZip();

      for (let i = 0; i < slideRefs.length; i++) {
        setExportProgress(`Rendering slide ${i + 1} of 5...`);
        const ref = slideRefs[i];
        if (ref.current) {
          const dataUrl = await htmlToImage.toPng(ref.current, { cacheBust: true, pixelRatio: 1, crossOrigin: 'anonymous' });
          const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
          zip.file(`carousel-slide-0${i + 1}.png`, base64Data, { base64: true });
        }
      }

      setExportProgress('Generating ZIP archive...');
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'beyond-the-brief-carousel-slides.zip';
      link.click();
    } catch (err) {
      console.error(err);
      alert('ZIP export failed. Please check console.');
    } finally {
      setExporting(false);
      setExportProgress('');
    }
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-charcoal-black/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Instagram Carousel Campaign</span>
          <h1 className="text-4xl font-serif mt-1">THE ART OF MOTION</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportAllAsZip}
            disabled={exporting}
            className="px-6 py-3 bg-charcoal-black text-warm-off-white font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {exporting ? exportProgress : 'Export All as ZIP (1080x1350)'}
          </button>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setActiveSlide(num)}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              activeSlide === num
                ? 'bg-charcoal-black text-warm-off-white'
                : 'bg-neutral-200 text-charcoal-black hover:bg-neutral-300'
            }`}
          >
            Slide 0{num}
          </button>
        ))}
        <button
          onClick={() => exportSingle(activeSlide - 1)}
          disabled={exporting}
          className="ml-auto px-4 py-2 bg-[#c5a059] text-charcoal-black font-mono text-xs uppercase tracking-widest hover:bg-[#b08d47] transition-colors disabled:opacity-50"
        >
          Download Slide 0{activeSlide} PNG
        </button>
      </div>

      {/* Preview Area (Slides rendered absolutely to remain in DOM for export) */}
      <div className="relative flex justify-center bg-neutral-900 p-8 rounded-xl overflow-hidden shadow-2xl h-[700px]">
         <div className="transform scale-[0.4] origin-top">
          {[Slide1, Slide2, Slide3, Slide4, Slide5].map((SlideComponent, i) => (
            <div
              key={i}
              ref={slideRefs[i]}
              className={`absolute top-0 left-0 transition-opacity duration-300 ${activeSlide === i + 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <SlideComponent />
            </div>
          ))}
         </div>
      </div>
    </div>
  );
};
