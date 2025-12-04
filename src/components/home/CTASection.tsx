import { Link } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-8 animate-glow-pulse">
            <Rocket className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-gradient">Start Building?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of makers, students, and engineers exploring the world of sensors and IoT. 
            Start with our interactive simulations today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/simulation" className="btn-neon-solid flex items-center justify-center gap-2 text-base">
              Launch Simulation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/learning" className="btn-neon flex items-center justify-center gap-2 text-base">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
