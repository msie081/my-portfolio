import { Button } from "./button";

export default function DownloadCV() {
  return (
    <Button asChild>
      <a href="/melissasieu-cv.pdf" download>
        Download CV
      </a>
    </Button>
  );
}