import { useState } from "react";
import { Button } from "../ui/button";
import { Check, Copy,  ArrowUp } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export default function Contact() {



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [copied, setCopied] = useState(false);

  const email = "melissatsieu2@email.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">

      <h2 className="text-3xl font-bold mb-10">Contact</h2>

      <p className="text-muted-foreground mb-10">
        Feel free to connect with me through the platforms below.
      </p>

      {/* Email Box */}
      <div className="flex justify-center mb-8">
      <button
        onClick={copyEmail}
        className="flex items-center gap-3 px-4 py-2 border rounded-lg hover:bg-muted transition cursor-pointer"
        title="Click to copy email"
      >
        <span className="text-sm text-muted-foreground">{email}</span>

        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
    </div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-4 mb-12">

          {/* GitHub */}
          <a
            href="http://github.com/msie081"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition text-muted-foreground hover:text-primary"
          >
            <GithubIcon size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/melissa-sieu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition text-muted-foreground hover:text-primary"
          >
            <LinkedinIcon size={20} />
          </a>

        </div>

        <div className="flex justify-center">
        <Button
          variant="secondary"
          onClick={scrollToTop}
          className="flex items-center gap-2 group"
        >
          Back to top

          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </Button>
      </div>
        

    </section>
  );
}