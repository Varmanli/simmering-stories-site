
import { Utensils } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Utensils className="text-warm-500 h-6 w-6" />
          <span className="font-playfair text-xl font-medium">Simmering Stories</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#recipes" className="text-sm hover:text-warm-600 transition-colors">Recipes</a>
          <a href="#categories" className="text-sm hover:text-warm-600 transition-colors">Categories</a>
          <a href="#contact" className="text-sm hover:text-warm-600 transition-colors">Contact</a>
        </nav>
        <Button size="sm" variant="outline" className="md:hidden">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
