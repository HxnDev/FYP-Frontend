import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import HeroSection from './components/pages/HeroSection';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Services />
      {/* <Routes>
        <Route exact path='/' children={<Home />} />
        <Route path='/services' children={<Services />} />
      </Routes> */}
      
      <Footer />
    </Router>
  );
}

export default App;
