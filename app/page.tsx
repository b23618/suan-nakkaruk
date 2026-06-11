import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import FarmStory from './components/FarmStory';
import Gallery from './components/Gallery';
import CustomerReviews from './components/CustomerReviews';
import LatestArticles from './components/LatestArticles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <WhyChooseUs />
        <FeaturedProducts />
        <FarmStory />
        <Gallery />
        <CustomerReviews />
        <LatestArticles />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
