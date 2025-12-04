import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-accent rounded-full animate-float delay-200" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-neon-purple rounded-full animate-float delay-300" />
        <div className="absolute top-1/3 right-[25%] w-1.5 h-1.5 bg-primary rounded-full animate-float delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Future of IoT Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in delay-100">
            <span className="text-gradient">Discover</span>
            <span className="text-foreground">, </span>
            <span className="text-gradient">Simulate</span>
            <span className="text-foreground">, </span>
            <br className="hidden md:block" />
            <span className="text-gradient">Innovate</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in delay-200">
            Your interactive gateway to sensors and IoT technology. Explore real-time simulations, 
            learn with hands-on tutorials, and build the connected future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in delay-300">
            <Link to="/catalog" className="btn-neon-solid flex items-center gap-2 text-base">
              Explore Sensors
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/simulation" className="btn-neon flex items-center gap-2 text-base">
              <Play className="w-5 h-5" />
              Try Simulation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 opacity-0 animate-fade-in delay-400">
            {[
              { value: "50+", label: "Sensors" },
              { value: "100+", label: "Tutorials" },
              { value: "10K+", label: "Makers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
