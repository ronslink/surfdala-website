import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Paydome from './pages/Paydome';
import Contact from './pages/Contact';
import Connectivity from './pages/Connectivity';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/paydome" element={<Paydome />} />
            <Route path="/connectivity" element={<Connectivity />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
