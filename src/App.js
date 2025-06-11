import 'bootstrap/dist/css/bootstrap.min.css';
import './gutenberg.css';
import './App.css';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import CarRental from './components/pages/CarRental';
import Contact from './components/pages/Contact';

import Blog from './components/pages/Blog';
import BlogSingle from './components/pages/BlogSingle';
import Automobili from './components/pages/Automobili';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />

          <Route path="/automobili" element={<Automobili />} />
        </Routes>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
