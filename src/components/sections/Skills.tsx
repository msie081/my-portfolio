import { Badge } from "../ui/badge";

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
        <div className="flex flex-wrap gap-4">
          {techStack.languages.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-sm font-medium cursor-default transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:bg-primary hover:text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">
          Frameworks & Libraries
        </h3>
        <div className="flex flex-wrap gap-4">
          {techStack.frameworks.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-sm font-medium cursor-default transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:bg-primary hover:text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tools & Databases */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Tools & Databases
        </h3>
        <div className="flex flex-wrap gap-4">
          {techStack.tools.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-sm font-medium cursor-default transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:bg-primary hover:text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}