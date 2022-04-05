import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import HeroSection from './components/pages/HeroSection';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/home' exact component={HeroSection} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
