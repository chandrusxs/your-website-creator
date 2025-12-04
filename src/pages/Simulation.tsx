import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Thermometer, Activity, Radio, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const simulations = [
  { id: "temperature", name: "Temperature Sensor", icon: Thermometer },
  { id: "motion", name: "Motion Detector", icon: Activity },
  { id: "distance", name: "Distance Sensor", icon: Radio },
];

const TemperatureSimulation = () => {
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(60);
  const [history, setHistory] = useState<number[]>([25, 24, 26, 25, 27, 26, 25]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = temperature + (Math.random() - 0.5) * 2;
      const clampedTemp = Math.max(15, Math.min(40, newTemp));
      setTemperature(clampedTemp);
      setHistory(prev => [...prev.slice(-19), clampedTemp]);
    }, 1000);
    return () => clearInterval(interval);
  }, [temperature]);

  const maxVal = Math.max(...history);
  const minVal = Math.min(...history);
  const range = maxVal - minVal || 1;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
          <label className="block text-sm text-muted-foreground mb-3">Set Temperature (°C)</label>
          <input
            type="range"
            min="15"
            max="40"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>15°C</span>
            <span className="text-primary font-semibold">{temperature.toFixed(1)}°C</span>
            <span>40°C</span>
          </div>
        </div>

        <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
          <label className="block text-sm text-muted-foreground mb-3">Set Humidity (%)</label>
          <input
            type="range"
            min="20"
            max="90"
            value={humidity}
            onChange={(e) => setHumidity(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>20%</span>
            <span className="text-accent font-semibold">{humidity}%</span>
            <span>90%</span>
          </div>
        </div>
      </div>

      {/* Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-card rounded-xl border border-primary/30 text-center">
          <Thermometer className="w-10 h-10 text-primary mx-auto mb-3" />
          <div className="font-display text-4xl font-bold text-primary mb-1">
            {temperature.toFixed(1)}°C
          </div>
          <div className="text-sm text-muted-foreground">Temperature</div>
        </div>
        
        <div className="p-6 bg-card rounded-xl border border-accent/30 text-center">
          <div className="w-10 h-10 mx-auto mb-3 text-accent text-2xl">💧</div>
          <div className="font-display text-4xl font-bold text-accent mb-1">
            {humidity}%
          </div>
          <div className="text-sm text-muted-foreground">Humidity</div>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border/50 text-center">
          <div className="w-10 h-10 mx-auto mb-3 text-yellow-400 text-2xl">🌡️</div>
          <div className="font-display text-4xl font-bold text-foreground mb-1">
            {(temperature * 9/5 + 32).toFixed(1)}°F
          </div>
          <div className="text-sm text-muted-foreground">Fahrenheit</div>
        </div>
      </div>

      {/* Graph */}
      <div className="p-6 bg-card rounded-xl border border-border/50">
        <h4 className="font-display text-lg font-semibold mb-4">Live Temperature Graph</h4>
        <div className="h-48 flex items-end gap-1">
          {history.map((temp, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t transition-all duration-300"
              style={{ height: `${((temp - minVal) / range) * 80 + 20}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>20s ago</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

const MotionSimulation = () => {
  const [motionDetected, setMotionDetected] = useState(false);
  const [sensitivity, setSensitivity] = useState(50);
  const [detectionCount, setDetectionCount] = useState(0);

  const simulateMotion = () => {
    setMotionDetected(true);
    setDetectionCount(prev => prev + 1);
    setTimeout(() => setMotionDetected(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
        <label className="block text-sm text-muted-foreground mb-3">Sensitivity</label>
        <input
          type="range"
          min="10"
          max="100"
          value={sensitivity}
          onChange={(e) => setSensitivity(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Low</span>
          <span className="text-primary font-semibold">{sensitivity}%</span>
          <span>High</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={simulateMotion}
          className={cn(
            "p-12 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center",
            motionDetected
              ? "bg-accent/20 border-accent animate-pulse"
              : "bg-card border-border/50 hover:border-primary/50"
          )}
        >
          <Activity className={cn(
            "w-16 h-16 mx-auto mb-4 transition-colors",
            motionDetected ? "text-accent" : "text-muted-foreground"
          )} />
          <div className="font-display text-2xl font-bold mb-2">
            {motionDetected ? "MOTION DETECTED!" : "Click to Simulate Motion"}
          </div>
          <div className="text-sm text-muted-foreground">
            {motionDetected ? "Sensor triggered" : "Waiting for motion..."}
          </div>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border/50">
          <h4 className="font-display text-lg font-semibold mb-4">Statistics</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Detections</span>
              <span className="font-display text-2xl font-bold text-primary">{detectionCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                motionDetected ? "bg-accent/20 text-accent" : "bg-secondary text-muted-foreground"
              )}>
                {motionDetected ? "Active" : "Idle"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sensitivity</span>
              <span className="text-foreground">{sensitivity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DistanceSimulation = () => {
  const [distance, setDistance] = useState(100);
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const displayDistance = unit === "cm" ? distance : (distance / 2.54).toFixed(1);
  const maxDistance = 400;
  const fillPercentage = (distance / maxDistance) * 100;

  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
        <label className="block text-sm text-muted-foreground mb-3">Object Distance</label>
        <input
          type="range"
          min="2"
          max="400"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>2cm</span>
          <span className="text-primary font-semibold">{distance}cm</span>
          <span>400cm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-xl border border-border/50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-display text-lg font-semibold">Distance Reading</h4>
            <div className="flex gap-2">
              <button
                onClick={() => setUnit("cm")}
                className={cn(
                  "px-3 py-1 rounded text-sm font-medium transition-colors",
                  unit === "cm" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                )}
              >
                cm
              </button>
              <button
                onClick={() => setUnit("in")}
                className={cn(
                  "px-3 py-1 rounded text-sm font-medium transition-colors",
                  unit === "in" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                )}
              >
                in
              </button>
            </div>
          </div>
          <div className="text-center py-8">
            <Radio className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="font-display text-5xl font-bold text-gradient mb-2">
              {displayDistance}
            </div>
            <div className="text-muted-foreground">{unit === "cm" ? "centimeters" : "inches"}</div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border/50">
          <h4 className="font-display text-lg font-semibold mb-4">Visual Representation</h4>
          <div className="relative h-48 bg-secondary/30 rounded-xl overflow-hidden">
            {/* Sensor */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-primary/20 border border-primary rounded flex items-center justify-center">
              <Radio className="w-4 h-4 text-primary" />
            </div>
            
            {/* Waves */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-primary/30 to-transparent transition-all duration-300"
              style={{ left: '48px', width: `${fillPercentage * 0.7}%` }}
            />
            
            {/* Object */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-20 bg-accent rounded transition-all duration-300"
              style={{ left: `${12 + fillPercentage * 0.8}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Sensor</span>
            <span>Object</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Simulation = () => {
  const [activeSimulation, setActiveSimulation] = useState("temperature");

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Virtual </span>
              <span className="text-gradient">Simulation Lab</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience sensors in action with interactive browser-based simulations. 
              Adjust parameters and see real-time responses.
            </p>
          </div>

          {/* Simulation Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {simulations.map((sim) => (
              <button
                key={sim.id}
                onClick={() => setActiveSimulation(sim.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  activeSimulation === sim.id
                    ? "bg-primary text-primary-foreground glow-box"
                    : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
              >
                <sim.icon className="w-5 h-5" />
                {sim.name}
              </button>
            ))}
          </div>

          {/* Simulation Area */}
          <div className="max-w-5xl mx-auto">
            {activeSimulation === "temperature" && <TemperatureSimulation />}
            {activeSimulation === "motion" && <MotionSimulation />}
            {activeSimulation === "distance" && <DistanceSimulation />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Simulation;
