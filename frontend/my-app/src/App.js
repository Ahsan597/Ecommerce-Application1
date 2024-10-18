import './App.css';
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Useraccount from "./pages/Useraccount"
import Deals from './pages/deals/Deals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from './pages/Product';
import Devices from './pages/products/Devices';
import Furniture from './pages/products/Furniture';
import Tools from './pages/products/Tools';
import Child from './pages/products/Child';
import Phone from './pages/products/Phone';
import Toys from './pages/products/Toys';
import Sports from './pages/products/Sports';
import Health from './pages/products/Health';
import Dchild from './pages/deals/Dchild';
import Ddevices from './pages/deals/Ddevices';
import Dphone from './pages/deals/Dphone';
import Dsports from './pages/deals/Dsports';
import Dtoys from './pages/deals/Dtoys';
import Haier from './pages/brands/Haier';
import Bonanza from './pages/brands/Bonanza';
import Nike from './pages/brands/Nike';
import Addtocart from './components/Addtocart/Addtocart';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Checkoutform from './components/Addtocart/Checkoutform';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/Signin" element={<Signin />}></Route>
              <Route exact path="/Signup" element={<Signup />}></Route>
              <Route exact path="/useraccount" element={<Useraccount />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
              <Route exact path="/addtocart" element={<Addtocart />}></Route>
              <Route exact path="/checkout" element={<Checkoutform />}></Route>
              <Route exact path="/deals" element={<Deals />}></Route>
              <Route exact path="/haier" element={<Haier />}></Route>
              <Route exact path="/bonanza" element={<Bonanza />}></Route>
              <Route exact path="/nike" element={<Nike />}></Route>
              <Route exact path="/device" element={<Devices />}></Route>
              <Route exact path="/furniture" element={<Furniture />}></Route>
              <Route exact path="/tools" element={<Tools />}></Route>
              <Route exact path="/child" element={<Child />}></Route>
              <Route exact path="/phone" element={<Phone />}></Route>
              <Route exact path="/toys" element={<Toys />}></Route>
              <Route exact path="/sports" element={<Sports />}></Route>
              <Route exact path="/health" element={<Health />}></Route>
              <Route exact path="/dchild" element={<Dchild />}></Route>
              <Route exact path="/ddevices" element={<Ddevices />}></Route>
              <Route exact path="/dphone" element={<Dphone />}></Route>
              <Route exact path="/dsports" element={<Dsports />}></Route>
              <Route exact path="/dtoys" element={<Dtoys />}></Route>

            </Routes>
            <Footer />
          </Router></CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
