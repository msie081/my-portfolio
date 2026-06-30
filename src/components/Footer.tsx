import { Button } from "./ui/button";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t py-10 px-6 mt-20">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left text */}
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>Melissa Sieu © 2026</p>
          <p className="text-xs mt-1">Built with React + Vite</p>
        </div>

        {/* Back to top */}
        <Button variant="secondary"
        onClick={scrollToTop}
        className="flex items-center gap-2"
        >
        Back to top

        <img
            src="/icons/arrow-up.svg"
            alt=""
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
        />
        </Button>

        

      </div>
    </footer>
  );
}