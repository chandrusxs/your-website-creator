import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Simulation", path: "/simulation" },
  { name: "Learning", path: "/learning" },
  { name: "Marketplace", path: "/marketplace" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cpu className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-accent" />
              <Zap className="w-4 h-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-wider">
              <span className="text-primary">Sensor</span>
              <span className="text-foreground">&</span>
              <span className="text-accent">IoT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10 glow-text"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/simulation" className="btn-neon-solid text-sm">
              Try Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/simulation"
                onClick={() => setIsOpen(false)}
                className="btn-neon-solid text-center mt-2"
              >
                Try Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
