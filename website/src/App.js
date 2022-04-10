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
import fire from './fire';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};


const App = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

const clearInputs = () => {
    setEmail('');
    setPassword('');
};

const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
};

const handleLogin = () => {
    clearErrors();
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
};

const handleLogout = () => {
    fire.auth().signOut();
};

const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            clearInputs();
            setUser(user);
        } else {
            setUser("");
        }
    });
};

useEffect(() => {
    authListener();
}, [])

  return (
    <Router>
      <Wrapper>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Login" element={<Login 
              email = {email}
              setEmail = {setEmail}
              password = {password}
              setPassword = {setPassword}
              handleLogin = {handleLogin}
              emailError = {emailError}
              passwordError = {passwordError}
             />} />

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
        <Footer />
      </Wrapper>
      
    </Router>
  );
}

export default App;
