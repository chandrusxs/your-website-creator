import { Monitor, Code, BookOpen, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Interactive Simulations",
    description: "Experience sensors in action with real-time browser-based simulations. No hardware required.",
  },
  {
    icon: Code,
    title: "Ready-to-Use Code",
    description: "Copy-paste Arduino, Raspberry Pi, and ESP32 code snippets for instant integration.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "From basics to advanced projects, learn IoT with step-by-step guides and tutorials.",
  },
  {
    icon: ShoppingCart,
    title: "Sensor Marketplace",
    description: "Get started quickly with curated sensor kits and IoT starter packs. Coming soon!",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Why </span>
            <span className="text-gradient">Sensor & IoT Explorer?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master sensor technology and IoT development, all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-transparent border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow-box transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
