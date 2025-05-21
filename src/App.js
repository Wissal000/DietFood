import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;