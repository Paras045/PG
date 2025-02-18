import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center relative bg-white">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Creative Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences that merge design and technology
        </p>
        <p className="text-gray-600 mb-4 md:mb-5">
        Email : parasgunjavate522@gmail.com , Mob no : 9356610087
        </p>
        <Button
          size="lg"
          className="rounded-full px-8"
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Work
        </Button>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
