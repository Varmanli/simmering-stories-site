
import { Card } from "./ui/card";
import LazyImage from "./LazyImage";
import { Button } from "./ui/button";
import { Instagram, Heart, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type InstagramPostProps = {
  image: string;
  likes: number;
  className?: string;
};

const InstagramPost = ({ image, likes, className }: InstagramPostProps) => {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg aspect-square", className)}>
      <LazyImage 
        src={image} 
        alt="Instagram post" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="flex items-center text-white gap-1">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">{likes}</span>
        </div>
      </div>
    </div>
  );
};

const InstagramFeed = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=2034",
      likes: 243
    },
    {
      image: "https://images.unsplash.com/photo-1582806209673-cb7fefc96c0f?q=80&w=1935",
      likes: 186
    },
    {
      image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?q=80&w=2070",
      likes: 327
    },
    {
      image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1974",
      likes: 195
    }
  ];

  const handleInstagramClick = () => {
    // Open Instagram in a new tab
    window.open('https://instagram.com/simmeringstories', '_blank');
  };

  return (
    <section id="instagram" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="md:max-w-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warm-100 dark:bg-warm-800/50 mb-4">
              <Instagram className="w-6 h-6 text-warm-600 dark:text-warm-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Follow Our Journey</h2>
            <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
              Join us on Instagram for daily cooking inspiration, behind-the-scenes content, and more delicious moments.
            </p>
          </div>

          <Button 
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 transition-all duration-200 hover:scale-105 shadow-sm flex items-center gap-2"
          >
            <Instagram className="h-5 w-5" />
            Follow @simmeringstories
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in animate-delay-200">
          {posts.map((post, index) => (
            <InstagramPost key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={handleInstagramClick}
            variant="outline" 
            className="border-warm-200 hover:bg-warm-100/50 hover:border-warm-300 transition-all duration-200"
          >
            View More on Instagram
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
