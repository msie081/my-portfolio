import { Card, CardContent } from "../ui/card";

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Built with React, Tailwind, and shadcn/ui.",
  },
  {
    title: "Flight Booking System",
    description: "Full-stack Java system with seat booking logic.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}