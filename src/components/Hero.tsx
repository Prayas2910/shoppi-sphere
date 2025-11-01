import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroBanner})`
        }}
      />
      <div className="relative container flex h-full items-center">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in">
            Premium Products, Unmatched Quality
          </h1>
          <p className="text-xl text-gray-200 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Discover our curated collection of luxury items designed for the modern lifestyle.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              onClick={() => navigate("/products")}
              className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white font-semibold"
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/products")}
              className="border-white text-white hover:bg-white/10"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
