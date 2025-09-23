import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st Box */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Amazon Prime Reviews</h3>
              <p className="text-gray-400 mb-4">
                Analyze Amazon Prime video reviews with Natural Language
                Processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
                {["NumPy", "Pandas", "NLTK", "Jupyter Notebook"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/FabienThich/Math-1130-A3"
                  className="my-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Repo &rarr;
                </a>
              </div>
            </div>

            {/* 2nd Box */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Overwatch</h3>
              <p className="text-gray-400 mb-4">
                Data-driven insights on win rates and gameplay dynamics of teams
                on Overwatch escort maps.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
                {["NumPy", "Pandas", "NLTK", "Jupyter Notebook"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="my-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Repo &rarr;
                </a>
              </div>
            </div>

            {/* 3rd Box */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Global Air Pollution Analysis
              </h3>
              <p className="text-gray-400 mb-4">
                An in-depth study of emissions and energy use trends to
                understand their impact on public health and the environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
                {["NumPy", "Pandas", "NLTK", "Jupyter Notebook"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/FabienThich/Math-1130-A2"
                  className="my-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Repo &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
