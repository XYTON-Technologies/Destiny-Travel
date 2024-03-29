import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Packages from './pages/packages';
import Trips from './pages/trips';
import Souvenirs from './pages/souvenirs';
import ItemDetails from './components/ItemDetails';
import Checkout from './pages/checkout';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<ItemDetails />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<ItemDetails />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
        <Route path="/souvenirs/:id" element={<ItemDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;