import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="flex justify-around">
        <Link to="/" className="font-bold text-xl">MemeApp</Link>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/explore" className="hover:text-gray-300 transition duration-300">Explore</Link>
          <Link to="/upload" className="hover:text-gray-300 transition duration-300">Upload</Link>
          <Link to="/leaderboard" className="hover:text-gray-300 transition duration-300">Leaderboard</Link>
          <Link to="/profile" className="hover:text-gray-300 transition duration-300">Profile</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-700 text-center py-4 flex flex-col items-center space-y-2"
          >
            <Link to="/explore" className="block py-2 w-full hover:bg-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link to="/upload" className="block py-2 w-full hover:bg-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Upload</Link>
            <Link to="/leaderboard" className="block py-2 w-full hover:bg-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Leaderboard</Link>
            <Link to="/profile" className="block py-2 w-full hover:bg-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Profile</Link>
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
}
