import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Hotels from './components/hotels/Hotels';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <Features />
        <Hotels />
      </main>
      
    </div>
  );
}

export default App;
