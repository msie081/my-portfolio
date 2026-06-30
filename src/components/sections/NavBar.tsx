import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          root: null,
          threshold: 0.6,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      active === id ? "text-primary" : "text-muted-foreground"
    } hover:text-primary`;

  return (
    <div className="w-full flex justify-center items-center px-10 py-4 fixed top-0 bg-background/80 backdrop-blur border-b z-50">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">

          <NavigationMenuItem>
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#skills" className={linkClass("skills")}>
              Skills
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}