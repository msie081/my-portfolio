import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

type Project = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  github: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built using React, TypeScript, Tailwind CSS and shadcn/ui, showcasing my projects and skills.",
    image: "/projects/portfolio.png",
    github: "https://github.com/msie081/my-portfolio",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
  title: "EVolocity Wireless Telemetry System",
  description: "A full-stack telemetry system developed for Formula SAE, featuring real-time vehicle data visualisation and backend services.",
  video: "/projects/evolocity-demo.mp4",
  github: "...",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
  title: "PokeScholar - Gamified Study Companion",
  description:
    "A mobile study companion that combines Pomodoro study sessions with Pokémon-inspired rewards to encourage productive study habits. Built responsive interfaces for study sessions, collections, leaderboards, social features and user profiles while integrating REST APIs, MongoDB and user authentication and automated testing.",
  image: "/projects/pokescholar.png",
  github: "https://github.com/YOUR_USERNAME/pokescholar",
  technologies: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Jest",
    "GitHub",
    "Jira",
  ],
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Project Video/Image */}
            {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="h-56 w-full object-contain bg-black"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover bg-black"
            />
          )}

            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label={`${project.title} GitHub`}
                >
                  <img
                    src="/icons/github.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}