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
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Hello, I'm Paras</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a creative developer with a passion for building beautiful and functional digital experiences. As a B.Tech student with a keen interest in web and app development, I specialize in crafting user-centric solutions that merge aesthetics with functionality.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, working on innovative projects, or sharing my knowledge through insightful discussions.
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
