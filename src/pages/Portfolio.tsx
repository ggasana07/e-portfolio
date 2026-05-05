import { useState } from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Gallery from '../components/Gallery';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', 'landscape', 'portrait', 'architecture', 'street'];

  const filteredImages = filter === 'all' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <main className="pt-32 pb-20 px-10 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16 border-b border-border pb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Collection</span>
        <h1 className="text-5xl font-serif italic text-white mb-10">Archive</h1>
        
        <div className="flex flex-wrap gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-all pb-2 border-b-2 font-medium ${
                filter === cat 
                  ? 'border-white text-white' 
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Gallery images={filteredImages} />
      </motion.div>
    </main>
  );
}
