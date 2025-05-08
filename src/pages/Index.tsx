
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedRecipe from "../components/FeaturedRecipe";
import Categories from "../components/Categories";
import LatestRecipes from "../components/LatestRecipes";
import BehindTheScenes from "../components/BehindTheScenes";
import CookingTips from "../components/CookingTips";
import NewsletterSignup from "../components/NewsletterSignup";
import InstagramFeed from "../components/InstagramFeed";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedRecipe />
        <Categories />
        <LatestRecipes />
        <BehindTheScenes />
        <CookingTips />
        <NewsletterSignup />
        <InstagramFeed />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
