import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import HowWeWork from './sections/HowWeWork';
import ServiceArea from './sections/ServiceArea';
import BookingCTA from './sections/BookingCTA';
import GoogleReviews from './sections/GoogleReviews';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <ServiceArea />
        <GoogleReviews />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

