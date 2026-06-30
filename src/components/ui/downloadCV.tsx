import { Button } from "./button";
import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <Button asChild variant="outline">
      <a href="/melissasieu-cv.pdf" download className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        Download CV
      </a>
    </Button>
  );
}