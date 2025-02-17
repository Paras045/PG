import { motion } from "framer-motion";
import { Code, Palette, Layout, Database, Terminal, Cloud } from "lucide-react";

const skills = [
  { icon: Code, title: "Frontend Development", description: "React, Vue, TypeScript" },
  { icon: Palette, title: "UI/UX Design", description: "Figma, Adobe XD" },
  { icon: Layout, title: "Responsive Design", description: "Mobile-first approach" },
  { icon: Database, title: "Backend Development", description: "Node.js, Python" },
  { icon: Terminal, title: "DevOps", description: "Docker, CI/CD" },
  { icon: Cloud, title: "Cloud Services", description: "AWS, Google Cloud" }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((Skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Skill.icon className="w-6 h-6 mr-3 text-gray-900" />
                  <h3 className="text-xl font-semibold">{Skill.title}</h3>
                </div>
                <p className="text-gray-600">{Skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
