import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-lg ${
        scrolled
          ? "bg-[rgba(10,10,10,0.95)] shadow-lg border-b border-white/10"
          : "bg-[rgba(10,10,10,0.5)]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold text-white leading-none" style={{ fontFamily: "'Great Vibes', cursive", fontSize: "0.9rem" }}>
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>F</span>abien{" "}
            <span className="text-blue-500"><span style={{ fontSize: "2rem", lineHeight: 1 }}>T</span>hich</span>
          </a>

          <button
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 md:hidden relative cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-500 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
