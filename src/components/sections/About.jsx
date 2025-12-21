import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "Bootstrap"];
  const backendSkills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Matplotlib",
    "Seaborn",
    "NLTK",
    "Flask",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <p className="text-gray-300 mb-6">
              I'm a Specialist High Skills Major (SHSM) graduate and a former
              Junior Software Engineer at North P&D, Inc., where I worked with
              React.js, Webflow, Bootstrap, and Python. These days, I'm diving
              into machine learning, AI, and data science. I'm also a Data
              Science student at York University, building skills in Python,
              NumPy, Pandas, Seaborn, and Matplotlib (just to name a few). I'm
              excited to use these tools to tackle real-world problems in the
              data science space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2 cursor-pointer">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2 cursor-pointer">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <b>BSc in Data Science</b> (Healthcare Stream) - York
                  University
                </li>
                <li>
                  Relevant Coursework:
                  <ul className="ml-12">
                    <li>- Principles & Techniques of Data Science</li>
                    <li>- Data Structures for Data Science</li>
                    <li>- Communication in Data Science</li>
                    <li>- Introduction to Statistics I & II</li>
                    <li>- Elementary Probability</li>
                    {/* <li>- Applied Linear Algebra</li> */}
                    {/* <li>- Applied Multivariate & Vector Calculus</li> */}
                    {/* <li>- Object-Oriented Design & Principles w/ Python</li> */}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Math Tutor at Pham Learning (2025 - Present)
                  </h4>
                  <p>
                    Played a key role in managing daily operations while
                    tutoring students from Grades 1–12, including those with
                    ADHD and other support needs, through one-on-one, small
                    group, and large group sessions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Junior Software Engineer at North P&D Inc (2022-2023)
                  </h4>
                  <p>
                    Software Engineer Intern → Junior Software Engineer: worked
                    with 3 clients, building features and end-to-end products,
                    and improved website performance (cut image load times from
                    800ms to 0ms).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
