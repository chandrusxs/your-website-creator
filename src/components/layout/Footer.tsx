import { Link } from "react-router-dom";
import { Cpu, Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Cpu className="w-8 h-8 text-primary" />
                <Zap className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-primary">Sensor</span>
                <span className="text-foreground">&</span>
                <span className="text-accent">IoT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your gateway to the world of sensors and IoT innovation. Discover, simulate, and build the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Catalog", "Simulation", "Learning", "Marketplace"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Tutorials", "Blog"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Sensor & IoT Explorer. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
