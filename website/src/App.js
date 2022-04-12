import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar/Navbar';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import Login from './components/pages/Login/Login';
import Aggressive from './components/pages/Features/Aggressive';
import Attendance from './components/pages/Features/Attendance';
import Choking from './components/pages/Features/Choking';
import EmptyCounter from './components/pages/Features/EmptyCounter';
import FaceMask from './components/pages/Features/FaceMask';
import Fainting from './components/pages/Features/Fainting';
import Smoking from './components/pages/Features/Smoking';
import SocialDistancing from './components/pages/Features/SocialDistancing';
import Weapon from './components/pages/Features/Weapon';
import {useLayoutEffect , useState, useEffect} from 'react'
import Surveillance from './components/pages/Surveillance/Surveillance';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};


const App = () => {   
  return (
    <Router>
      <Wrapper>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Login" element={<Login />
              } />
            <Route path="/Aggressive" element={<Aggressive/>} />
            <Route path="/Attendance" element={<Attendance/>} />
            <Route path="/Choking" element={<Choking/>} />
            <Route path="/EmptyCounter" element={<EmptyCounter/>} />
            <Route path="/FaceMask" element={<FaceMask/>} />
            <Route path="/Fainting" element={<Fainting/>} />
            <Route path="/Smoking" element={<Smoking/>} />
            <Route path="/SocialDistancing" element={<SocialDistancing/>} />
            <Route path="/Weapon" element={<Weapon/>} />
            <Route path="/Surveillance" element={<Surveillance/>} />
          </Routes>
      </Wrapper>
      
    </Router>
  );
}

export default App;
