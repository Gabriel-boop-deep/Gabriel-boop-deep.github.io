import { motion } from "framer-motion";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/Data" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Tecnologias que <span className="text-gradient">domino</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Stack moderna para resultados profissionais
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tech banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden"
        >
          <div className="relative">
            <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 px-6">
                  {["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Docker", "Git"].map((tech) => (
                    <span
                      key={`${setIndex}-${tech}`}
                      className="text-3xl font-bold text-muted-foreground/10 hover:text-primary/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
