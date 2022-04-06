import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from './pages/OrderPage'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


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
    </div>
  );
}

export default App;
