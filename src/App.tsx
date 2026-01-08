import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import ServiceArea from './sections/ServiceArea';
import BookingCTA from './sections/BookingCTA';
import GoogleReviews from './sections/GoogleReviews';

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <BookingCTA />
        <About />
        <ServiceArea />
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;

