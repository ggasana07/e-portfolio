import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Archive', path: '/archive' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 border border-white flex items-center justify-center text-sm font-bold tracking-tighter text-white">
            GI
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-light text-white hidden sm:block">INEZA Gabriel / Photography</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-widest font-medium transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-zinc-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/r.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            <span>View CV</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-widest ${
                location.pathname === link.path ? 'text-white' : 'text-zinc-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/r.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white"
          >
            View CV
          </a>
        </motion.div>
      )}
    </nav>
  );
}
