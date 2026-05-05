import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 px-10 max-w-7xl mx-auto min-h-screen font-sans">
      <div className="mb-20 max-w-2xl border-b border-border pb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Insights</span>
        <h1 className="text-5xl font-serif italic text-white mb-6">Journal</h1>
        <p className="text-zinc-500 text-xs font-light leading-relaxed tracking-wide">
          Reflections on light, composition, and the stories captured behind the lens of the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {BLOG_POSTS.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video bg-surface overflow-hidden mb-8 border border-white/5">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                 <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[9px] uppercase tracking-widest text-white border border-white/10">
                    {post.category}
                 </span>
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-serif italic text-white group-hover:translate-x-2 transition-transform">
                {post.title}
              </h2>
              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6">
              {post.date}
            </p>
            
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xl">
              {post.excerpt}
            </p>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
