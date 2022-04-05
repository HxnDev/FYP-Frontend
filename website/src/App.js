import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router basename='/'>
      <h1>Wassup</h1>
      <Navbar />
      <Routes>
        <Route path="/index.js" />
      </Routes>
    </Router>
  );
}

export default App;
