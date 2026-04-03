import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Dim backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-[rgba(10,10,10,0.97)] border-l border-white/10 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="flex flex-col pt-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
            >
              {links.map(({ href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
                  }}
                  className="text-xl font-medium text-gray-200 hover:text-blue-400 transition-colors py-3 px-6 border-b border-white/5"
                >
                  {label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
