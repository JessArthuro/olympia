import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Hotels from './components/hotels/Hotels';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <Features />
        <Hotels />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
