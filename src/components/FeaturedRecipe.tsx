
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import LazyImage from "./LazyImage";

const FeaturedRecipe = () => {
  return (
    <section id="recipes" className="py-16 md:py-24 relative">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Featured Recipe</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Try our most popular and seasonal recipe that's loved by our community
          </p>
        </div>

        <Card className="overflow-hidden border-none shadow-lg opacity-0 animate-fade-in animate-delay-200 transition-all duration-300 hover:shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964" 
                alt="Mediterranean Grilled Salmon" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-warm-100 text-warm-700 hover:bg-warm-200 dark:bg-warm-600 dark:text-warm-100">Featured</Badge>
              </div>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mediterranean Grilled Salmon</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-warm-50/50 dark:bg-warm-800/50 transition-all hover:bg-warm-100/70">30 min</Badge>
                    <Badge variant="outline" className="bg-warm-50/50 dark:bg-warm-800/50 transition-all hover:bg-warm-100/70">4 servings</Badge>
                    <Badge variant="outline" className="bg-warm-50/50 dark:bg-warm-800/50 transition-all hover:bg-warm-100/70">Seafood</Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  This perfectly grilled salmon is topped with a fresh Mediterranean salsa made with tomatoes, olives, and lemon. It's light, healthy and bursting with summer flavors.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Main Ingredients:</p>
                    <p className="text-sm text-muted-foreground">Fresh salmon, cherry tomatoes, olives, lemon, olive oil, garlic, herbs</p>
                  </div>
                  
                  <Button className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105">
                    View Full Recipe
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedRecipe;
