import { Layout } from "@/components/layout/Layout";
import { ShoppingCart, Package, Truck, Shield, Bell, ArrowRight } from "lucide-react";

const kits = [
  {
    name: "IoT Starter Kit",
    description: "Perfect for beginners. Includes Arduino Uno, 10 essential sensors, and breadboard.",
    price: "$49.99",
    tag: "Popular",
    sensors: ["DHT11", "HC-SR04", "PIR", "LDR"],
  },
  {
    name: "Weather Station Pro",
    description: "Build a complete weather monitoring system with professional-grade sensors.",
    price: "$89.99",
    tag: "Best Value",
    sensors: ["BME280", "UV Index", "Rain Gauge", "Wind Speed"],
  },
  {
    name: "Robotics Sensor Pack",
    description: "Motion and distance sensors for robotics and automation projects.",
    price: "$69.99",
    tag: "New",
    sensors: ["MPU6050", "HC-SR04", "IR Sensor", "Encoder"],
  },
];

const features = [
  {
    icon: Package,
    title: "Curated Kits",
    description: "Hand-picked sensor combinations for specific projects",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All sensors tested and verified",
  },
];

const Marketplace = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Bell className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Coming Soon</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Sensor </span>
              <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get everything you need to start building. Curated sensor kits, components, 
              and IoT starter packs delivered to your door.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Kits */}
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-foreground">Featured </span>
            <span className="text-gradient">Kits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {kits.map((kit) => (
              <div key={kit.name} className="sensor-card flex flex-col">
                {/* Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    kit.tag === "Popular" ? "bg-primary/10 text-primary" :
                    kit.tag === "Best Value" ? "bg-accent/10 text-accent" :
                    "bg-neon-purple/10 text-neon-purple"
                  }`}>
                    {kit.tag}
                  </span>
                  <ShoppingCart className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {kit.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {kit.description}
                </p>

                {/* Included Sensors */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {kit.sensors.map((sensor) => (
                    <span key={sensor} className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">
                      {sensor}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="font-display text-2xl font-bold text-gradient">
                    {kit.price}
                  </div>
                  <button className="btn-neon text-sm opacity-50 cursor-not-allowed">
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-2xl mx-auto text-center p-8 md:p-12 bg-card rounded-2xl border border-border/50">
            <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Be the First to Know
            </h3>
            <p className="text-muted-foreground mb-6">
              Sign up to get notified when the marketplace launches. 
              Early subscribers get 20% off their first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button className="btn-neon-solid flex items-center justify-center gap-2">
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;
