
import { Card, CardContent } from "./ui/card";
import { CakeSlice, Pizza, Carrot, CookingPot, Soup, Wheat } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
  sectionId?: string;
};

const CategoryCard = ({ icon, title, count, sectionId }: CategoryCardProps) => {
  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <Card 
      onClick={handleClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-warm-100 hover:border-warm-200"
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-warm-100 flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors duration-300 transform group-hover:scale-110">
          <div className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} recipes</p>
      </CardContent>
    </Card>
  );
};

const Categories = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-warm-50/50 dark:bg-warm-900/10">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Recipe Categories</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Browse our collection of recipes organized by cuisine and dietary preferences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 opacity-0 animate-fade-in animate-delay-200">
          <CategoryCard 
            icon={<Pizza className="w-8 h-8 text-warm-600" />} 
            title="Italian" 
            count={42}
            sectionId="italian-recipes"
          />
          <CategoryCard 
            icon={<CookingPot className="w-8 h-8 text-warm-600" />} 
            title="Persian" 
            count={28}
            sectionId="persian-recipes"
          />
          <CategoryCard 
            icon={<Carrot className="w-8 h-8 text-warm-600" />} 
            title="Vegetarian" 
            count={65}
            sectionId="vegetarian-recipes"
          />
          <CategoryCard 
            icon={<CakeSlice className="w-8 h-8 text-warm-600" />} 
            title="Desserts" 
            count={37}
            sectionId="dessert-recipes"
          />
          <CategoryCard 
            icon={<Soup className="w-8 h-8 text-warm-600" />} 
            title="Soups" 
            count={24}
            sectionId="soup-recipes"
          />
          <CategoryCard 
            icon={<Wheat className="w-8 h-8 text-warm-600" />} 
            title="Gluten-Free" 
            count={31}
            sectionId="gluten-free-recipes"
          />
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
