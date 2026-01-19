import { motion } from "framer-motion";

const skills = [
  { icon: "🤖", title: "Machine Learning", description: "TensorFlow, PyTorch, Scikit-learn" },
  { icon: "📊", title: "Data Engineering", description: "dbt, Airflow, SQL, ETL/ELT" },
  { icon: "🐍", title: "Python", description: "Pandas, NumPy, FastAPI" },
  { icon: "☁️", title: "Cloud & DevOps", description: "Docker, Git, CI/CD" },
  { icon: "📈", title: "Data Analytics", description: "Modern Data Stack, BI" },
  { icon: "🧠", title: "Deep Learning", description: "CNN, RNN, Transfer Learning" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expertise <span className="text-gradient">Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <motion.span
                className="text-4xl block mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.icon}
              </motion.span>
              <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-gradient transition-all">
                {skill.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 overflow-hidden"
        >
          <div className="relative">
            <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 px-4">
                  {["Python", "TensorFlow", "PyTorch", "dbt", "SQL", "Docker", "AWS", "Airflow", "Pandas", "NumPy", "Scikit-learn", "FastAPI"].map((tech) => (
                    <span
                      key={`${setIndex}-${tech}`}
                      className="text-2xl font-bold text-muted-foreground/20 hover:text-primary/50 transition-colors cursor-default"
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
