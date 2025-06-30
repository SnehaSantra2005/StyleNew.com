import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/women_banner1.png";
import men_banner from "./Components/Assets/banner_mens1.png";
import kid_banner from "./Components/Assets/banner_kids1.png";
import SkinCare_banner from "./Components/Assets/banner_SkinCare.png";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import CategoryShowcase from './Components/CategoryShowcase/CategoryShowcase'; // Import category showcase component
import CategoryPage from './Pages/CategoryPage'; // Import category page
export const backend_url = 'http://localhost:5000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/SkinCare" element={<ShopCategory banner={SkinCare_banner} category="SkinCare" />} />



          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />

          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/" element={<CategoryShowcase />} />
          {/* Dynamic category route */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
