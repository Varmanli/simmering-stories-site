
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import LazyImage from "./LazyImage";

type RecipeCardProps = {
  image: string;
  title: string;
  description: string;
  time: string;
  category: string;
};

const RecipeCard = ({ image, title, description, time, category }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-warm-100 dark:border-warm-800/50 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <LazyImage 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-warm-100/80 text-warm-700 hover:bg-warm-200 dark:bg-warm-600/80 dark:text-warm-100">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="font-bold text-lg mb-2 group-hover:text-warm-600 dark:group-hover:text-warm-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="mr-1">⏱️</span>
          <span>{time}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-5 px-5">
        <Button 
          variant="outline" 
          className="w-full border-warm-200 hover:bg-warm-100/50 hover:border-warm-300 transition-all duration-200 text-sm"
        >
          Read Recipe
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const LatestRecipes = () => {
  const recipes = [
    {
      image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?q=80&w=2070",
      title: "Homemade Pasta with Fresh Herbs",
      description: "Learn how to make traditional Italian pasta from scratch with just a few ingredients.",
      time: "45 min",
      category: "Italian"
    },
    {
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032",
      title: "Saffron Rice with Barberries",
      description: "This Persian jeweled rice is perfect for special occasions and celebrations.",
      time: "50 min",
      category: "Persian"
    },
    {
      image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978",
      title: "Roasted Vegetable Buddha Bowl",
      description: "A nutritious and satisfying meal full of colorful roasted vegetables and grains.",
      time: "30 min",
      category: "Vegetarian"
    }
  ];

  return (
    <section id="latest-recipes" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Latest Recipes</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Discover our newest culinary creations fresh from the kitchen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0 animate-fade-in animate-delay-200">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-300">
          <Button 
            className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105"
          >
            View All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestRecipes;
