export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      {/* Content container (centered) */}
      <div className="flex flex-col gap-10">

        {/* Intro text */}
        <div className="text-center md:text-left">
          <p className="text-muted-foreground leading-relaxed mb-4">
            I’m a Graduate Software Engineer @ UoA, NZ with experience building full-stack web
            and mobile applications using React, React Native, TypeScript, Node.js,
            and Express.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Through team-based projects, I’ve worked on designing and developing REST
            APIs, integrating databases, and applying modern software engineering
            practices such as testing and version control.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            I enjoy building clean, user-focused applications and I’m especially
            interested in combining strong engineering principles with good UI/UX
            design to create smooth and practical user experiences.
          </p>
        </div>

        {/* Education section */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-center">

          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/universityLogo.jpg"
              alt="University of Auckland"
              className="rounded-xl w-full max-w-xs object-cover shadow-md"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              Education & Achievements
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Bachelor of Engineering (Honours) – Software Engineering
                </span>{" "}
                • 2022–2025
              </li>

              <li>
                <span className="font-medium text-foreground">
                  Staples Education Foundation (SEF) Scholarship (BUDDY)
                </span>{" "}
                • 2024
              </li>

              <li>
                <span className="font-medium text-foreground">
                  University of Auckland Top Achiever Scholarship
                </span>{" "}
                • 2021
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}