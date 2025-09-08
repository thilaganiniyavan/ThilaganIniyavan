import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-card-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground font-semibold">
              © Thilagan Iniyavan
            </p>
            <p className="text-text-secondary text-sm">
              2025
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/thilaganiniyavan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href="mailto:thilaganiniyavan@gmail.com"
              className="flex items-center text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;