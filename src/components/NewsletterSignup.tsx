
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send, Mail } from "lucide-react";
import { toast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [emailModal, setEmailModal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You're now on our list for the latest recipes and cooking tips.",
      });
      
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You're now on our list for the latest recipes and cooking tips.",
      });
      
      setEmailModal("");
      setIsSubmitting(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-warm-50/50 dark:bg-warm-900/10 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-100 dark:bg-warm-800/50 mb-6 opacity-0 animate-fade-in">
            <Send className="w-8 h-8 text-warm-600 dark:text-warm-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-100">
            Subscribe to our newsletter for new recipes, cooking tips, and exclusive content delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in animate-delay-200">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-warm-200 focus:border-warm-300 transition-all duration-200 focus:ring-warm-300/50"
            />
            <Button 
              type="submit" 
              className="bg-warm-500 hover:bg-warm-600 transition-transform duration-200 hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <div className="mt-8 opacity-0 animate-fade-in animate-delay-300">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-warm-200 hover:bg-warm-100/50 hover:border-warm-300 transition-all duration-200">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe to Our Newsletter
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Subscribe to our newsletter</DialogTitle>
                  <DialogDescription>
                    Get the latest recipes, cooking tips, and exclusive content delivered to your inbox.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleModalSubmit} className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="email-modal"
                      type="email"
                      placeholder="Your email address"
                      value={emailModal}
                      onChange={(e) => setEmailModal(e.target.value)}
                      className="col-span-4 border-warm-200"
                      required
                    />
                  </div>
                  <DialogFooter>
                    <Button 
                      type="submit"
                      className="bg-warm-500 hover:bg-warm-600 transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4 opacity-0 animate-fade-in animate-delay-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="absolute -top-16 -right-16 w-64 h-64 bg-warm-200 dark:bg-warm-600/20 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-warm-100 dark:bg-warm-700/20 rounded-full opacity-60 blur-3xl"></div>
    </section>
  );
};

export default NewsletterSignup;
