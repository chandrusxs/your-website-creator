import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Search, Filter, Thermometer, Gauge, Activity, Sun, Droplets, Radio, Download, Code, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Sensors", icon: Filter },
  { id: "temperature", name: "Temperature", icon: Thermometer },
  { id: "pressure", name: "Pressure", icon: Gauge },
  { id: "motion", name: "Motion", icon: Activity },
  { id: "light", name: "Light", icon: Sun },
  { id: "humidity", name: "Humidity", icon: Droplets },
  { id: "proximity", name: "Proximity", icon: Radio },
];

const sensors = [
  {
    id: 1,
    name: "DHT11",
    category: "temperature",
    description: "Digital temperature and humidity sensor with calibrated output",
    specs: ["0-50°C", "20-90% RH", "±2°C accuracy"],
    applications: ["Weather stations", "Home automation", "HVAC systems"],
  },
  {
    id: 2,
    name: "DS18B20",
    category: "temperature",
    description: "Waterproof digital temperature sensor with 1-Wire interface",
    specs: ["-55°C to 125°C", "±0.5°C accuracy", "9-12 bit resolution"],
    applications: ["Liquid temperature", "Industrial monitoring", "Aquariums"],
  },
  {
    id: 3,
    name: "BMP280",
    category: "pressure",
    description: "Barometric pressure sensor with high accuracy and low power",
    specs: ["300-1100 hPa", "±1 hPa accuracy", "I2C/SPI interface"],
    applications: ["Altitude measurement", "Weather monitoring", "Drones"],
  },
  {
    id: 4,
    name: "MPU6050",
    category: "motion",
    description: "6-axis motion tracking with accelerometer and gyroscope",
    specs: ["±2/4/8/16g accel", "±250-2000°/s gyro", "I2C interface"],
    applications: ["Robotics", "Gaming controllers", "Gesture recognition"],
  },
  {
    id: 5,
    name: "HC-SR04",
    category: "proximity",
    description: "Ultrasonic distance sensor for non-contact measurements",
    specs: ["2-400cm range", "3mm resolution", "15° sensing angle"],
    applications: ["Obstacle detection", "Level sensing", "Parking sensors"],
  },
  {
    id: 6,
    name: "LDR (GL5528)",
    category: "light",
    description: "Light dependent resistor for ambient light sensing",
    specs: ["5-10 lux dark", "1MΩ dark resistance", "Fast response"],
    applications: ["Auto brightness", "Day/night detection", "Light meters"],
  },
  {
    id: 7,
    name: "DHT22",
    category: "humidity",
    description: "High-precision digital humidity and temperature sensor",
    specs: ["-40-80°C", "0-100% RH", "±0.5°C, ±2% RH"],
    applications: ["Greenhouses", "Data centers", "Museums"],
  },
  {
    id: 8,
    name: "PIR HC-SR501",
    category: "motion",
    description: "Passive infrared motion detector for human presence",
    specs: ["7m range", "120° angle", "Adjustable delay"],
    applications: ["Security systems", "Auto lighting", "Occupancy sensing"],
  },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSensors = sensors.filter((sensor) => {
    const matchesCategory = activeCategory === "all" || sensor.category === activeCategory;
    const matchesSearch = sensor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sensor.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Sensor </span>
              <span className="text-gradient">Catalog</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive collection of sensors. Each listing includes specifications, 
              code samples, and real-world applications.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search sensors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "bg-secondary/50 text-muted-foreground border border-transparent hover:border-border/50 hover:text-foreground"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sensors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSensors.map((sensor, index) => (
              <div
                key={sensor.id}
                className="sensor-card flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  {categories.find(c => c.id === sensor.category)?.icon && (
                    <span className="text-primary">
                      {(() => {
                        const IconComponent = categories.find(c => c.id === sensor.category)?.icon;
                        return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
                      })()}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {sensor.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {sensor.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {sensor.specs.slice(0, 2).map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                    <Code className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-secondary/50 text-muted-foreground rounded-lg text-sm font-medium hover:text-foreground hover:bg-secondary transition-colors">
                    <Download className="w-4 h-4" />
                    Datasheet
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSensors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No sensors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
