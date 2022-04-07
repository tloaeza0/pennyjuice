<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <div className="App">
      <ContactForm/>
=======
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from './pages/OrderPage'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
         <Route path='/' />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>
      <Footer />
>>>>>>> 336a6c2717115ff99ab0c052a95ba44fe8db000f
    </div>
  );
}

export default App;
