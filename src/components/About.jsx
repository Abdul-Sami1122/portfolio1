import { motion } from "framer-motion";
import { portfolioData } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 border-b-4 border-blue-500 w-fit mx-auto pb-2"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.img 
            src="/images/profile.png" 
            alt="Profile"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Welcome to my portfolio! I specialize in creating modern and responsive web applications. 
              With a strong foundation in both front-end and back-end development, I enjoy bringing ideas to life in the browser.
              When I'm not coding, you can find me exploring new hiking trails, reading a good book, or experimenting with new recipes.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Toolkit</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#3182ce" }}
                  className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm cursor-default hover:text-white transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;