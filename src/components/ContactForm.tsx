
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Get in Touch</h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Have a question, recipe suggestion, or just want to say hello? Drop us a message!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-warm-100 opacity-0 animate-fade-in animate-delay-200">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    placeholder="Jane Doe" 
                    className="border-warm-200 focus:border-warm-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="jane@example.com" 
                    className="border-warm-200 focus:border-warm-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Share your thoughts, questions, or recipe ideas..."
                  className="min-h-32 border-warm-200 focus:border-warm-300"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-warm-500 hover:bg-warm-600" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-warm-100 rounded-full opacity-60 blur-3xl"></div>
    </section>
  );
};

export default ContactForm;
