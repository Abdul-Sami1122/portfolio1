import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 px-8 py-4 flex justify-between items-center bg-gray-900/90 backdrop-blur-sm text-white shadow-lg"
    >
      <a href="#home" className="text-2xl font-bold tracking-wider text-blue-400">
        {portfolioData.name}
      </a>
      <ul className="hidden md:flex gap-8">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors text-gray-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;