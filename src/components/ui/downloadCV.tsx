import { Button } from "./button";

export default function DownloadCV() {
  return (
    <Button asChild variant="outline">
      <a href="#projects" className="flex items-center gap-2">
        <img src="/icons/download.svg" alt="Download" className="w-4 h-4" />
        Download CV
      </a>
    </Button>
  );
}