const techStack: string[] = [
  "React",
  "TypeScript",
  "Tailwind",
  "Java",
  "C#",
  "SQL",
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

      <div className="flex flex-wrap gap-3 mb-16">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-muted text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}