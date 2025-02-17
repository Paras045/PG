import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Hello, I'm John Doe</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm a creative developer with a passion for building beautiful and functional digital experiences. With over 5 years of experience in web development, I specialize in creating user-centric solutions that merge aesthetics with functionality.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
