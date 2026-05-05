import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Archive from './pages/Archive';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black transition-colors duration-500">
      <Navbar />
      {children}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
          © 2026 GASANA INEZA Shukuru Gabriel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
