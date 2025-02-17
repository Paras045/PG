import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold">Portfolio</a>
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-gray-600 transition-colors">Work</a>
            <a href="#skills" className="hover:text-gray-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
