import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-hero border-t border-hero-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-hero-muted text-sm">
            © 2025 Masood Mirza — Data Analyst Portfolio
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/masoodmirza1997"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-hero-surface/50 flex items-center justify-center text-hero-muted hover:text-hero-text hover:bg-hero-surface transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/masood-mirza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-hero-surface/50 flex items-center justify-center text-hero-muted hover:text-hero-text hover:bg-hero-surface transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
