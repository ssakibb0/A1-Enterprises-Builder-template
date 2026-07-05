import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const heroSlides = [
  {
    image: hero1,
    title: "Building Dreams",
    subtitle: "Creating Landmarks",
  },
  {
    image: hero2,
    title: "Premium Developments",
    subtitle: "Exceptional Quality",
  },
  {
    image: heroConstruction,
    title: "Excellence in Construction",
    subtitle: "15+ Years of Trust",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent drop-shadow-lg">
                {heroSlides[currentSlide].subtitle}
              </span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              A-1 <span className="text-gradient drop-shadow-2xl">Enterprises</span>
            </h1>
            
            <p className="mb-4 text-3xl font-semibold text-white drop-shadow-lg md:text-4xl">
              {heroSlides[currentSlide].title}
            </p>
            
            <p className="mb-8 max-w-2xl text-lg text-white/90 drop-shadow-lg md:text-xl">
              Creating world-class infrastructure with 15+ years of expertise in civil contracting.
              From residential to commercial, we deliver quality at every step.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
                Our Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button> */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Our Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Us
              </Button>

            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
