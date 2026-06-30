import { Button } from "../ui/button";
import DownloadCV from "../ui/downloadCV";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Melissa 👋
      </h1>

      <p className="text-xl text-muted-foreground max-w-xl">
        Graduate Software Developer focused on building clean, modern web apps and UX-focused systems.
      </p>

      <div className="mt-6 flex gap-4">
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <DownloadCV />
      </div>
    </section>
  );
}