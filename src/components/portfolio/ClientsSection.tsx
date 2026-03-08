import { motion } from "framer-motion";
import techvisionLogo from "@/assets/logos/techvision.png";
import dataflowLogo from "@/assets/logos/dataflow.png";
import velotechLogo from "@/assets/logos/velotech.png";
import neuralAiLogo from "@/assets/logos/neural-ai.png";
import impulseLogo from "@/assets/logos/impulse.png";
import banvicLogo from "@/assets/logos/banvic.png";

const clients = [
  { name: "TechVision", logo: techvisionLogo },
  { name: "DataFlow", logo: dataflowLogo },
  { name: "Velotech", logo: velotechLogo },
  { name: "NeuralAI", logo: neuralAiLogo },
  { name: "Impulse Digital", logo: impulseLogo },
  { name: "BANVIC", logo: banvicLogo },
];

const ClientsSection = () => {
  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Parceiros & Clientes</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Empresas que confiam no meu trabalho
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              className="flex items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
