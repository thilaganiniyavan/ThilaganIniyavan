import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "About",
    path: "/"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Experience",
    path: "/experience"
  }, {
    name: "Resume",
    path: "/resume"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
            Thilagan Iniyavan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium transition-colors duration-300 hover:text-primary ${isActive(item.path) ? "text-primary border-b-2 border-primary" : "text-text-secondary"}`}>
                {item.name}
              </Link>)}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-card-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block font-medium transition-colors duration-300 hover:text-primary ${isActive(item.path) ? "text-primary" : "text-text-secondary"}`}>
                  {item.name}
                </Link>)}
              <Button className="btn-primary w-full">
                Contact Me
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;