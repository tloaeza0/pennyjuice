import { Route, Routes} from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
         <Route path='/' />
          
          <Route path="/About" element={<About />} />
         
          <Route path="/contact" element={<ContactPage />} />
         
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
