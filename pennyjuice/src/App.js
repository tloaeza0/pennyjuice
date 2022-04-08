import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
