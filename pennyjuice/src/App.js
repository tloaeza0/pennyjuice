import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./pages/Home";
import Order from "./Order";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
