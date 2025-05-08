
import { Card, CardContent } from "./ui/card";
import LazyImage from "./LazyImage";
import { Button } from "./ui/button";
import { Camera } from "lucide-react";

const BehindTheScenes = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-50/50 dark:bg-warm-900/10">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Behind The Scenes</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            A peek into our culinary journey and the stories behind our recipes
          </p>
        </div>

        <Card className="overflow-hidden border-none shadow-md opacity-0 animate-fade-in animate-delay-200">
          <div className="grid md:grid-cols-2 gap-0">
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-4 inline-block">
                <div className="bg-warm-100 dark:bg-warm-800/50 p-2.5 rounded-full">
                  <Camera className="h-6 w-6 text-warm-600 dark:text-warm-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Recipe Development Process</h3>
              <p className="text-muted-foreground mb-6">
                Every recipe on Simmering Stories is tested at least three times before being published. We start with research and inspiration, then move to testing and adjustments, and finally to the photography and storytelling stage.
              </p>
              <p className="text-muted-foreground mb-6">
                Many of our recipes come from family traditions or travels, and we pride ourselves on adapting them for the home cook while preserving their authentic flavors. The process often involves multiple shopping trips, kitchen failures, and moments of culinary revelation.
              </p>
              <Button className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105 self-start">
                Read Our Story
              </Button>
            </CardContent>
            <div className="grid grid-cols-2 gap-2 p-6 md:p-8">
              <LazyImage 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070" 
                alt="Chef chopping vegetables" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <LazyImage 
                src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2072" 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <LazyImage 
                src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1976" 
                alt="Recipe testing process" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <LazyImage 
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2026" 
                alt="Finished dish being photographed" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BehindTheScenes;
