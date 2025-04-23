import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeContext } from './theme';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-400 dark:bg-gray-900 text-black dark:text-white transition-all">
        
        {/* 🧭 Navbar */}
        <nav className="fixed top-0 left-0 z-50 w-full p-4 flex items-center justify-between bg-gray-800 text-white font-bold shadow-lg">
          <h2 className="text-2xl pl-4">Bhavesh</h2>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-8">
            {["/", "/projects", "/blogs", "/skills", "/contact"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className="hover:text-red-500 hover:border-b-2 border-red-500 pb-1 transition duration-300"
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>

          {/* Dark Mode + Toggle */}
          <div className="flex items-center gap-4 pr-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
              {darkMode ? '🌞' : '🌙'}
            </button>
            <button
              className="sm:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '❌' : '☰'}
            </button>
          </div>
        </nav>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden flex flex-col items-center bg-gray-800 text-white font-semibold overflow-hidden p-5"
            >
              {["/", "/projects", "/blogs", "/skills", "/contact"].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.4)] transition duration-300"
                >
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔁 Pages */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>

          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
}
