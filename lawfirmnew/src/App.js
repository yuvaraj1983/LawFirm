
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import IntroduceSection from "./components/IntroduceSection/IntroduceSection"
import Cards from "./components/CardSection/Cards"

function App() {
  return (
    <div style={{backgroundColor:'black'}} className='App'>
      <header >
          <Navbar />   
      </header>
      <HeroSection /> 
      <IntroduceSection />  
      <Cards />
    </div>
  );
}

export default App;
