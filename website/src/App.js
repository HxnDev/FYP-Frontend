import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar/Navbar';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import Login from './components/pages/Login/Login';
import Features from './components/pages/Features/Features';
//import FaceMask from './components/pages/Features/FaceMask';
import ChokingDetection from './components/pages/Features/Choking Detection';

function App() {
  return (
    <Router>
      <Navbar />
      <ChokingDetection />
      {/* <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
