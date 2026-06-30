const techStack = {
  languages: [
    "Java",
    "TypeScript",
    "JavaScript",
    "C",
    "C#",
    "HTML/CSS",
    "SQL",
    "MATLAB",
    "R",
    "Python",
  ],
  frameworks: [
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "JavaFX",
    "Expo",
    "Jest",
    "Supertest",
    "Vitest",
  ],
  tools: [
    "Git",
    "GitHub",
    "MongoDB",
    "SQLite",
    "Jira",
    "Figma",
    "Postman",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

      {/* Languages */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.languages.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-muted text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">
          Frameworks & Libraries
        </h3>
        <div className="flex flex-wrap gap-3">
          {techStack.frameworks.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-muted text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Databases */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Tools & Databases
        </h3>
        <div className="flex flex-wrap gap-3">
          {techStack.tools.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-muted text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}