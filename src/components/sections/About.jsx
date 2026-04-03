import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

const badgeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "R", "JavaScript", "Java", "PHP"],
  },
  {
    label: "Data Science & ML",
    skills: ["pandas", "NumPy", "scikit-learn", "SciPy", "statsmodel", "NLTK", "Beautiful Soup", "Requests"],
  },
  {
    label: "Visualization & Apps",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Flask", "WordCloud"],
  },
];

const courses = [
  "Statistics I & II",
  "Health Informatics",
  "Health Studies I & II",
  "Data Structures & Algorithms",
  "Applied Linear Algebra",
  "Object-Oriented Programming (Python)",
  "Intro to Data Science",
  "Intro to R",
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-heading text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/20 card-hover mb-6">
            <p className="text-gray-300 mb-8">
              I&apos;m a Data Science student specializing in health informatics at York University
              (expected April 2028), with hands-on experience building analytics dashboards and
              applying Python, SQL, and machine learning to real-world datasets. I&apos;ve analyzed
              health records, modeled pollution-mortality correlations, and built end-to-end data
              pipelines. Driven by the intersection of data and health equity, I enjoy turning
              complex datasets into actionable insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillGroups.map((group) => (
                <div key={group.label} className="rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3">{group.label}</h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={badgeContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {group.skills.map((tech) => (
                      <motion.span key={tech} variants={badgeVariants} className="skill-badge cursor-pointer">
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/20 card-hover">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl font-bold text-white">York University</h3>
                <p className="text-gray-400 text-sm mt-1">Honours BSc in Data Science (Health)</p>
              </div>
              <span className="bg-blue-500/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/20 whitespace-nowrap">
                Expected April 2028
              </span>
            </div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Relevant Coursework</p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {courses.map((course) => (
                <motion.span key={course} variants={badgeVariants} className="skill-badge">
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
