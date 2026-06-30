import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";


export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-10 py-4 fixed top-0 bg-background/80 backdrop-blur border-b z-50">

      {/* Left / Center nav */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">

          <NavigationMenuItem>
            <a href="home" className="text-sm font-medium hover:text-primary">
              Home
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="about" className="text-sm font-medium hover:text-primary">
              About
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

     

    </div>
  );
}