import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <Features />
      </main>
      
    </div>
  );
}

export default App;
