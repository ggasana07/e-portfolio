import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Gallery from '../components/Gallery';

export default function Archive() {
  const categories = ['all', 'landscape', 'portrait', 'architecture', 'street', 'event'];

  return (
    <main className="pt-32 pb-20 px-10 max-w-7xl mx-auto min-h-screen bg-black">
      <div className="mb-16 border-b border-white/10 pb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">The Complete</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-6">Archive</h1>
        <p className="text-zinc-500 text-sm max-w-2xl leading-relaxed">
          A comprehensive collection of moments, studies, and stories captured through my lens. 
          This archive represents the breadth of my visual exploration across various genres and events.
        </p>
      </div>

      <div className="space-y-32">
        {categories.filter(c => c !== 'all').map((category) => {
          const categoryImages = IMAGES.filter(img => img.category === category);
          if (categoryImages.length === 0) return null;

          return (
            <section key={category} className="space-y-12">
              <div className="flex items-center gap-6">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold whitespace-nowrap">
                  {category} / Series
                </h2>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
              <Gallery images={categoryImages} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
