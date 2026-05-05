import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, PROJECTS } from '../constants';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <main className="pt-20 bg-bg text-ink selection:bg-ink selection:text-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden px-10">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={IMAGES[0].url}
            className="w-full h-full object-cover [image-rendering:auto] brightness-[1.1] contrast-[1.05]"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-70 mb-4">
              GASANA INEZA Shukuru Gabriel — Featured Series
            </p>
            <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.9] tracking-tight mb-8">
              Shadows of <br /> Gabriel
            </h1>
              <div className="flex flex-wrap items-center gap-4 mt-12">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all shadow-2xl"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/letter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/20 px-8 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 text-white transition-all"
                  >
                    View Cover Letter
                  </a>
                  <a
                    href="/rec.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/20 px-8 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 text-white transition-all"
                  >
                    View Recommendation
                  </a>
                  <a
                    href="/r.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/20 px-8 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 text-white transition-all"
                  >
                    View CV
                  </a>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-10 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-white/10"
          >
            <img
              src="/gaby.jpeg"
              alt="Gasana Ineza Shukuru Gabriel"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-6">The Creator</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8 leading-tight">
              Gasana Ineza <br /> Shukuru Gabriel
            </h2>
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed max-w-lg">
              <p>
                I am an S5 student with a deep-seated passion for digital art and visual storytelling. 
                My work is a continuous exploration of how technology and creativity intersect to create 
                compelling narratives that resonate on a human level.
              </p>
              <p>
                As a storyteller, I focus on capturing the essence of moments, whether through the lens 
                of a camera or the precision of digital tools. Every project is an opportunity to 
                push the boundaries of visual expression and share a unique perspective with the world.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">Passion</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Digital Art / Storytelling</p>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">Education</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">S5 Student</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="mb-16 border-b border-border pb-4 flex justify-between items-end">
          <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/10] bg-surface overflow-hidden mb-6 border border-white/5">
                <img
                  src={project.coverUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif italic text-white mb-4 group-hover:translate-x-2 transition-transform">{project.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resource Hub / Downloads */}
      <section className="py-20 px-10 border-y border-white/5 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Credentials</span>
              <h2 className="text-3xl font-serif italic text-white mb-6">Professional Documents</h2>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Access my Curriculum Vitae, academic recommendations, and latest project rate cards for your review and archival.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/letter.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white text-black px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all shadow-2xl"
              >
                View Cover Letter
              </a>
              <a 
                href="/r.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-transparent border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-white hover:text-black transition-all"
              >
                View CV
              </a>
              <a 
                href="/rec.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-transparent border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-white hover:text-black transition-all"
              >
                View Recommendation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-32 px-6 bg-bg border-b border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif italic text-white uppercase tracking-[0.2em]">Latest Snapshots</h2>
          </div>
          <Gallery images={IMAGES.slice(0, 4)} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <h2 className="text-2xl md:text-4xl font-light leading-relaxed italic font-serif mb-12">
          "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… it remembers little things, long after you have forgotten everything."
        </h2>
        <p className="text-zinc-500 text-sm uppercase tracking-widest">— Aaron Siskind</p>
      </section>

      {/* Skills & Experience */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Technicality</span>
            <h2 className="text-4xl font-serif italic text-white mb-12">Expertise</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: 'Composition', desc: 'Visual storytelling through geometric balance.' },
                { title: 'Cinematography', desc: 'Capturing motion and light in cinematic frames.' },
                { title: 'Post-Processing', desc: 'Advanced color grading and digital darkroom techniques.' },
                { title: 'Studio Lighting', desc: 'Mastering artificial light for editorial precision.' },
                { title: 'Film Photography', desc: 'Traditional analog processes and grain aesthetics.' },
                { title: 'Live streaming', desc: 'Co-ordinating the live streaming events accurately and smooth.' },
                { title: 'Public Speaking', desc: 'Articulate delivery of creative concepts and visual theory.' },
                { title: 'Leadership', desc: 'Guiding creative teams and directing large-scale visual projects.' },
                { title: 'Bilingual Fluency', desc: 'Native-level proficiency in two languages(English, Kinyarwanda) for communication.' },
                { title: 'Other Skills', desc: 'Time management, Programming, Mentorship, Innovation, Digital skills, Team work, Gender equality advocacy' },
                { title: 'Creative Direction', desc: 'Orchestrating visual narratives from concept to final execution.' },
              ].map((skill) => (
                <div key={skill.title} className="group">
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-white font-bold mb-2 group-hover:text-zinc-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed max-w-[180px]">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Opportunities</span>
            <h2 className="text-4xl font-serif italic text-white mb-12">Experience</h2>
            <div className="space-y-12">
              {[
                { year: '2025 — Present', role: 'Official Photographer', studio: 'Kigali Breaking Festival' },
                { year: '2023 — Present', role: 'Active Photogepher & Videographer', studio: 'ASYV Media House' },
                { year: '2024 — 2025', role: 'An Digital Art Intern', studio: 'Envision Rwanda' },
              ].map((exp) => (
                <div key={exp.year} className="flex gap-8 group">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600 w-32 flex-shrink-0 pt-1">
                    {exp.year}
                  </span>
                  <div>
                    <h3 className="text-sm font-serif italic text-white mb-1 group-hover:translate-x-2 transition-transform">
                      {exp.role}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {exp.studio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
