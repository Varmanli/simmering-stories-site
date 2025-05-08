
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedRecipe from "../components/FeaturedRecipe";
import Categories from "../components/Categories";
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
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
