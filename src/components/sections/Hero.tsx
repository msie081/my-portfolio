import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Melissa 👋
      </h1>

      <p className="text-xl text-muted-foreground max-w-xl">
        Software Developer focused on building clean, modern web apps and UX-focused systems.
      </p>

      <div className="mt-6 flex gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </section>
  );
}