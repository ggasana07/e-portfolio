import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="pt-32 pb-20 px-10 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Get in touch</span>
          <h1 className="text-5xl font-serif italic text-white mb-8">Get To Know Gabriel</h1>
          <p className="text-zinc-500 text-xs font-light leading-relaxed tracking-wide mb-12 max-w-md">
            The lens finds what the mind seeks. Let's collaborate On your next visual narrative.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Email</p>
                <p className="text-xs font-light text-ink lowercase">ggasana07@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <Phone className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Phone</p>
                <p className="text-xs font-light text-ink">+250 796 134 233</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Location</p>
                <p className="text-xs font-light text-ink">Kigali, Rwanda</p>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/10 max-w-xs">
               <h3 className="text-[11px] uppercase tracking-[0.3em] mb-6 text-white font-bold">Resources</h3>
               <div className="space-y-4">
                   <a href="/letter.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group cursor-pointer">
                    <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors tracking-wide">View Cover Letter</span>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-0.5 group-hover:border-white/20 transition-colors">PDF</span>
                  </a>
                  <a href="/r.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group cursor-pointer">
                    <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors tracking-wide">View CV</span>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-0.5 group-hover:border-white/20 transition-colors">PDF</span>
                  </a>
                 
                  {/* 
                  <a href="/equipment-list.pdf" download className="flex items-center justify-between group cursor-pointer group">
                    <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors tracking-wide">Equipment List</span>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-0.5 group-hover:border-white/20 transition-colors">PDF</span>
                  </a>
                  */}
                  <a href="/rec.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group cursor-pointer">
                    <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors tracking-wide">View Recommendation</span>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-0.5 group-hover:border-white/20 transition-colors">PDF</span>
                  </a>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface p-8 md:p-12 border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/10 py-2 text-[10px] focus:outline-none focus:border-white transition-colors uppercase tracking-widest text-white"
                placeholder="JOHN DOE"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/10 py-2 text-[10px] focus:outline-none focus:border-white transition-colors uppercase tracking-widest text-white"
                placeholder="ABC@GMAIL.COM"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Project Brief</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-2 text-[10px] focus:outline-none focus:border-white transition-colors resize-none uppercase tracking-widest text-white"
                placeholder="TELL US ABOUT YOUR VISION..."
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 text-[11px] uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-2 ${
                submitted 
                  ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-neutral-200 shadow-xl'
              }`}
            >
              <Send className="w-4 h-4" />
              {submitted ? 'Inquiry Sent' : 'Send Inquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
