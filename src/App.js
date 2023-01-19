import './App.css';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  return (

    <div className="app">
      
      <Header />

      <Navbar />

      <Hero />

      <Activities />

      <Booking />

      <Gallery />

      <Contact />

      <Footer />

    </div>

  );

};

export default App;
