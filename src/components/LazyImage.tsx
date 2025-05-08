
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(true);
      };
    } else {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }
  }, [src, priority]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          imageLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
