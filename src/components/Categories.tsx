
import { Card, CardContent } from "./ui/card";
import { CakeSlice, Pizza, Carrot, CookingPot, Soup, Wheat } from "lucide-react";

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
};

const CategoryCard = ({ icon, title, count }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 border-warm-100 hover:border-warm-200">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-warm-100 flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors">
          {icon}
        </div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} recipes</p>
      </CardContent>
    </Card>
  );
};

const Categories = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-warm-50/50">
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
          />
          <CategoryCard 
            icon={<CookingPot className="w-8 h-8 text-warm-600" />} 
            title="Persian" 
            count={28}
          />
          <CategoryCard 
            icon={<Carrot className="w-8 h-8 text-warm-600" />} 
            title="Vegetarian" 
            count={65}
          />
          <CategoryCard 
            icon={<CakeSlice className="w-8 h-8 text-warm-600" />} 
            title="Desserts" 
            count={37}
          />
          <CategoryCard 
            icon={<Soup className="w-8 h-8 text-warm-600" />} 
            title="Soups" 
            count={24}
          />
          <CategoryCard 
            icon={<Wheat className="w-8 h-8 text-warm-600" />} 
            title="Gluten-Free" 
            count={31}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
