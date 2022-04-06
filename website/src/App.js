import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
