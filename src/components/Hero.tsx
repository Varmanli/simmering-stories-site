
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 opacity-0 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=2070" 
                alt="Delicious homemade pasta with fresh ingredients" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-warm-700/30 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Delicious Recipes for Every <span className="text-warm-600">Home Chef</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover culinary delights from around the world with easy-to-follow recipes and inspiring food stories.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-warm-500 hover:bg-warm-600">
                Latest Recipes
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-warm-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-warm-200 rounded-full opacity-60 blur-3xl"></div>
    </section>
  );
};

export default Hero;
