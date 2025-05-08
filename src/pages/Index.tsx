
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
      <main className="flex-grow">
        <Hero />
        <FeaturedRecipe />
        <Categories />
        <div id="italian-recipes" className="scroll-mt-24">
          <LatestRecipes />
        </div>
        <div id="persian-recipes" className="scroll-mt-24">
          <BehindTheScenes />
        </div>
        <div id="vegetarian-recipes" className="scroll-mt-24">
          <CookingTips />
        </div>
        <NewsletterSignup />
        <InstagramFeed />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
