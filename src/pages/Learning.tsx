import { Layout } from "@/components/layout/Layout";
import { BookOpen, Video, FileCode, Users, ArrowRight, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tutorials = [
  {
    title: "Getting Started with Arduino",
    description: "Learn the basics of Arduino programming and connect your first sensor",
    duration: "30 min",
    level: "Beginner",
    category: "Basics",
  },
  {
    title: "Temperature Monitoring System",
    description: "Build a complete temperature monitoring station with alerts",
    duration: "1 hour",
    level: "Intermediate",
    category: "Project",
  },
  {
    title: "Motion Detection Security",
    description: "Create a PIR-based security system with notifications",
    duration: "45 min",
    level: "Intermediate",
    category: "Project",
  },
  {
    title: "Raspberry Pi IoT Gateway",
    description: "Set up a Raspberry Pi as an IoT gateway for multiple sensors",
    duration: "2 hours",
    level: "Advanced",
    category: "Project",
  },
];

const resources = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for hands-on learning",
    count: "25+",
  },
  {
    icon: FileCode,
    title: "Code Examples",
    description: "Ready-to-use code for Arduino, ESP32, and Pi",
    count: "100+",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Detailed sensor datasheets and wiring diagrams",
    count: "50+",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other makers and get help",
    count: "10K+",
  },
];

const caseStudies = [
  {
    title: "Smart Agriculture System",
    description: "How a farm uses soil moisture and weather sensors to optimize irrigation",
    image: "🌾",
  },
  {
    title: "Industrial Monitoring",
    description: "Predictive maintenance using vibration and temperature sensors",
    image: "🏭",
  },
  {
    title: "Health Wearables",
    description: "Building a heart rate monitor with pulse sensors",
    image: "❤️",
  },
];

const Learning = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Learning </span>
              <span className="text-gradient">Hub</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master sensor technology with our comprehensive tutorials, guides, and real-world case studies. 
              From beginner to advanced, we've got you covered.
            </p>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {resources.map((resource) => (
              <div key={resource.title} className="sensor-card text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:glow-box transition-all">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-gradient mb-1">{resource.count}</div>
                <h3 className="font-semibold text-foreground mb-1">{resource.title}</h3>
                <p className="text-muted-foreground text-xs">{resource.description}</p>
              </div>
            ))}
          </div>

          {/* Tutorials */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                <span className="text-foreground">Featured </span>
                <span className="text-gradient">Tutorials</span>
              </h2>
              <button className="btn-neon text-sm flex items-center gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((tutorial, index) => (
                <div key={tutorial.title} className="sensor-card group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tutorial.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tutorial.level === "Beginner" ? "bg-accent/10 text-accent" :
                      tutorial.level === "Intermediate" ? "bg-yellow-400/10 text-yellow-400" :
                      "bg-red-400/10 text-red-400"
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Start Learning
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="text-foreground">Real-World </span>
              <span className="text-gradient">Case Studies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div key={study.title} className="sensor-card text-center group cursor-pointer">
                  <div className="text-6xl mb-4">{study.image}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learning;
