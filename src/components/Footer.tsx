
import { Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-700 dark:bg-warm-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Utensils className="h-5 w-5" />
            <span className="font-playfair text-xl">Simmering Stories</span>
          </div>
          
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#recipes" className="text-sm hover:text-warm-200 transition-colors">Recipes</a>
            <a href="#categories" className="text-sm hover:text-warm-200 transition-colors">Categories</a>
            <a href="#contact" className="text-sm hover:text-warm-200 transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="border-t border-warm-600 dark:border-warm-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-warm-200">© {new Date().getFullYear()} Simmering Stories. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="#" className="text-sm text-warm-200 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-warm-200 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
