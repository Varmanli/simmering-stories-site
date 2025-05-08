
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import LazyImage from "./LazyImage";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    
    if (title && subtitle && buttons) {
      title.classList.add("animate-fade-in");
      
      setTimeout(() => {
        subtitle.classList.add("animate-fade-in");
      }, 300);
      
      setTimeout(() => {
        buttons.classList.add("animate-fade-in");
      }, 600);
    }
    
    return () => {
      if (title && subtitle && buttons) {
        title.classList.remove("animate-fade-in");
        subtitle.classList.remove("animate-fade-in");
        buttons.classList.remove("animate-fade-in");
      }
    };
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 w-full h-full">
        <LazyImage 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070" 
          alt="Beautifully styled food with fresh ingredients" 
          className="object-cover w-full h-full"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent dark:from-background/95 dark:via-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
      </div>

      <div className="container relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl space-y-8">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 transition-all duration-700"
          >
            <span className="block">Culinary Stories</span> 
            <span className="text-warm-600 dark:text-warm-500">For Your Table</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-md opacity-0 transition-all duration-700 delay-300"
          >
            Discover culinary delights from around the world with easy-to-follow recipes and inspiring food stories.
          </p>
          
          <div 
            ref={buttonsRef}
            className="flex flex-wrap gap-4 opacity-0 transition-all duration-700 delay-600"
          >
            <Button 
              size="lg" 
              className="bg-warm-500 hover:bg-warm-600 transform transition-all duration-300 hover:scale-105 hover:shadow-md group"
            >
              Latest Recipes
              <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-warm-400 hover:border-warm-500 transition-all duration-300 hover:scale-105 hover:shadow-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
