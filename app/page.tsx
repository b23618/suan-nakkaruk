import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import FarmStory from './components/FarmStory';
import CustomerReviews from './components/CustomerReviews';
import LatestArticles from './components/LatestArticles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts />
        <FarmStory />
        <CustomerReviews />
        <LatestArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
