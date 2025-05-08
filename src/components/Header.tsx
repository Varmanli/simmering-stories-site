
import { Utensils } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "py-4 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10 transition-all duration-200",
        isScrolled && "shadow-sm py-3"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Utensils className="text-warm-500 h-6 w-6" />
          <span className="font-playfair text-xl font-medium">Simmering Stories</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#recipes" className="text-sm hover:text-warm-600 transition-colors">Recipes</a>
          <a href="#categories" className="text-sm hover:text-warm-600 transition-colors">Categories</a>
          <a href="#contact" className="text-sm hover:text-warm-600 transition-colors">Contact</a>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#recipes" 
              className="text-sm hover:text-warm-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recipes
            </a>
            <a 
              href="#categories" 
              className="text-sm hover:text-warm-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a 
              href="#contact" 
              className="text-sm hover:text-warm-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
