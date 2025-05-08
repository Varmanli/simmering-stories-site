
import { Card, CardContent } from "./ui/card";
import { BookText, Book } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type TipCardProps = {
  title: string;
  description: string;
  iconClass?: string;
};

const TipCard = ({ title, description, iconClass }: TipCardProps) => {
  return (
    <Card className="border-warm-100 dark:border-warm-800/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-6">
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", iconClass || "bg-warm-100 dark:bg-warm-800/50")}>
          <BookText className="w-6 h-6 text-warm-600 dark:text-warm-400" />
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const CookingTips = () => {
  const tips = [
    {
      title: "Room Temperature Ingredients",
      description: "For baking, take dairy ingredients out of the refrigerator 30 minutes before starting for better texture and even baking.",
      iconClass: "bg-warm-100 dark:bg-warm-800/50"
    },
    {
      title: "Salt as You Go",
      description: "Season dishes at multiple stages of cooking rather than all at once at the end for more balanced flavor.",
      iconClass: "bg-warm-200 dark:bg-warm-700/50"
    },
    {
      title: "Rest Your Meat",
      description: "Allow meat to rest after cooking to let juices redistribute, resulting in more tender and flavorful results.",
      iconClass: "bg-warm-100 dark:bg-warm-800/50"
    },
    {
      title: "Prep Before Cooking",
      description: "Prepare and measure all ingredients before you start cooking (mise en place) to make the process smoother.",
      iconClass: "bg-warm-200 dark:bg-warm-700/50"
    }
  ];

  return (
    <section id="cooking-tips" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warm-100 dark:bg-warm-800/50 mb-4 opacity-0 animate-fade-in">
            <Book className="w-6 h-6 text-warm-600 dark:text-warm-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Cooking Tips & Tricks</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Simple techniques to elevate your cooking and make every dish shine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-in animate-delay-200">
          {tips.map((tip, index) => (
            <TipCard key={index} {...tip} />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-300">
          <Button 
            className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105"
          >
            View All Cooking Tips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CookingTips;
