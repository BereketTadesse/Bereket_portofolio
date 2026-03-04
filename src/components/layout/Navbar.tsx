import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsl(0 0% 5% / 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(0 0% 100% / 0.06)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link to="/" className="font-display font-bold text-lg text-white tracking-tight hover:text-primary transition-colors duration-300">
            {personalInfo.name}.
          </Link>

          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side — Resume button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/50 hover:text-white transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/50 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Button variant="hero" size="sm" asChild>
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-sm font-medium transition-colors ${location.pathname === link.href
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 pt-4"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-white/50 hover:text-white transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-white/50 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg text-white/50 hover:text-white transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <Button variant="hero" size="sm" asChild>
                    <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
