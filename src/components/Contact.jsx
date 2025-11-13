import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2 
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }}
           className="text-4xl font-bold mb-8 border-b-4 border-blue-500 w-fit mx-auto pb-2"
        >
          Get In Touch
        </motion.h2>
        
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          I'm currently available for freelance work and open to new opportunities. 
          If you have a project in mind or just want to say hello, feel free to reach out!
        </p>

        <motion.a 
          href={`mailto:${portfolioData.contact.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold mb-12 transition-colors"
        >
          Email Me
        </motion.a>

        <div className="flex justify-center gap-8 text-3xl">
          <SocialLink href={portfolioData.contact.whatsapp} icon={<FaWhatsapp />} />
          <SocialLink href={portfolioData.contact.linkedin} icon={<FaLinkedin />} />
          <SocialLink href={portfolioData.contact.github} icon={<FaGithub />} />
          <SocialLink href={portfolioData.contact.twitter} icon={<FaTwitter />} />
        </div>

        <footer className="mt-20 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -5, color: "#4299e1" }}
    className="text-gray-400 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Contact;