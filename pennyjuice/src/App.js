import { Router, Route, Routes } from "react-router-dom";
import ContactPage from "./Components/Contact/ContactPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <main>
        <Route>
          <Route path="/" />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
