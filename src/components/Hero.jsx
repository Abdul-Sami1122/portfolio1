import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000')] bg-cover bg-center bg-no-repeat relative">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hello, I'm <span className="text-blue-500">{portfolioData.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          I'm a passionate {portfolioData.title}.
        </motion.p>

        <motion.a 
          href="#projects"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;