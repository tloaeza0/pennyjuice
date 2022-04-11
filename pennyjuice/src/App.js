import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./App.css";
import Home from "./Pages/Home";
import Order from "./Order";
import './main.css';
import Slider from "./Components/Slider";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/Home" element={<Home />} />

         <Route path="/Products" element={<Slider/>} />

        <Route path="/About" element={<About />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Order" element={<Order />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
