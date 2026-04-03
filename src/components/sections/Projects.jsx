import { motion } from "framer-motion";
import { ProjectsData } from "./ProjectsData";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 gradient-heading text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ProjectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              className="p-6 rounded-xl border border-white/20 card-hover flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-badge">{tech}</span>
                ))}
              </div>
              <div className="flex-grow" />
              <a
                target="_blank"
                href={project.repoLink}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Repo &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
