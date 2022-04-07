import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/ContactPage";
import OrderPage from './Pages/OrderPage'
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
    </div>
  );
}

export default App;
