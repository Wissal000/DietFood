import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;