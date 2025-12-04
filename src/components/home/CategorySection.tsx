import { Link } from "react-router-dom";
import { Thermometer, Gauge, Activity, Sun, Droplets, Radio, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Thermometer,
    name: "Temperature",
    description: "DHT11, DS18B20, thermocouples and more",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
  },
  {
    icon: Gauge,
    name: "Pressure",
    description: "BMP280, MPX series, barometric sensors",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
  {
    icon: Activity,
    name: "Motion",
    description: "PIR, accelerometers, gyroscopes",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Sun,
    name: "Light",
    description: "LDR, photodiodes, UV sensors",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
  {
    icon: Droplets,
    name: "Humidity",
    description: "Capacitive, resistive humidity sensors",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30",
  },
  {
    icon: Radio,
    name: "Proximity",
    description: "Ultrasonic, IR, LIDAR sensors",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
  },
];

export const CategorySection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Sensor </span>
            <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive catalog of sensors organized by type. 
            Each category includes detailed specifications, code samples, and applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/catalog?category=${category.name.toLowerCase()}`}
              className="sensor-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.bgColor} ${category.borderColor} border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className={`w-7 h-7 ${category.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/catalog" className="btn-neon inline-flex items-center gap-2">
            View All Sensors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
