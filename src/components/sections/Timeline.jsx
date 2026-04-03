import { motion } from "framer-motion";

const ENTRIES = [
  {
    id: 1,
    role: "Junior Data Analyst",
    company: "Pham Learning, Inc.",
    period: "January 2026 – Present",
    bullets: [
      "Built an end-to-end analytics dashboard centralizing 2+ months of tutoring data using Python, pandas, and Streamlit",
      "Automated attendance and progress tracking across 30+ students by designing a pipeline that ingests and processes Google Sheets data",
      "Visualized monthly KPIs (attendance frequency, progress trends, engagement) enabling data-driven decisions for parents and tutors",
    ],
    side: "left",
  },
  {
    id: 2,
    role: "Junior Software Engineer / Intern",
    company: "North P&D, Inc.",
    period: "September 2022 – March 2023",
    bullets: [
      "Reduced image load times from 800ms to 0ms via HTML inspection, network analysis, and image compression",
      "Built a React.js blog system with JSON data integration, boosting marketing reach and showcasing industry expertise",
      "Developed a Laravel backend for user registration and post creation, integrating MySQL for data management",
    ],
    side: "right",
  },
];

export const Timeline = () => {
  return (
    <section id="experience" className="py-20 relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-16 gradient-heading text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/20 hidden md:block" />

          <div className="space-y-12">
            {ENTRIES.map((entry) => {
              const isLeft = entry.side === "left";
              return (
                <div key={entry.id} className="relative flex items-center md:grid md:grid-cols-2 md:gap-8">
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a0a0a] z-10 hidden md:block" />

                  {!isLeft && <div className="hidden md:block" />}

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={`p-6 rounded-xl border border-white/20 card-hover w-full ${isLeft ? "md:text-right" : ""}`}
                  >
                    <h3 className="text-lg font-bold text-white">{entry.role}</h3>
                    <p className="text-blue-400 font-medium text-sm mb-1">{entry.company}</p>
                    <p className="text-gray-500 text-xs mb-3">{entry.period}</p>
                    <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                      {entry.bullets.map((b, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </motion.div>

                  {isLeft && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
