import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Useraccount from "./components/Useraccount"
import Deals from './components/Deals/Deals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from './components/Product';
import Devices from './components/Products/Devices';
import Furniture from './components/Products/Furniture';
import Tools from './components/Products/Tools';
import Child from './components/Products/Child';
import Phone from './components/Products/Phone';
import Toys from './components/Products/Toys';
import Sports from './components/Products/Sports';
import Health from './components/Products/Health';
import Dchild from './components/Deals/Dchild';
import Ddevices from './components/Deals/Ddevices';
import Dphone from './components/Deals/Dphone';
import Dsports from './components/Deals/Dsports';
import Dtoys from './components/Deals/Dtoys';
import Haier from './components/Brands/Haier';
import Bonanza from './components/Brands/Bonanza';
import Nike from './components/Brands/Nike';
import Addtocart from './components/Addtocart/Addtocart';
import { AuthProvider } from './components/context/AuthContext';
import { CartProvider } from './components/context/CartContext';
import Checkoutform from './components/Addtocart/Checkoutform';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
       <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Signin" element={<Signin/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="/useraccount" element={<Useraccount/>}></Route>
          <Route exact path="/product" element={<Product/>}></Route>
          <Route exact path="/addtocart" element={<Addtocart/>}></Route>
          <Route exact path="/checkout" element={<Checkoutform/>}></Route>
          <Route exact path="/deals" element={<Deals/>}></Route>
          <Route exact path="/haier" element={<Haier/>}></Route>
          <Route exact path="/bonanza" element={<Bonanza/>}></Route>
          <Route exact path="/nike" element={<Nike/>}></Route>
          <Route exact path="/device"element={<Devices/>}></Route>
          <Route exact path="/furniture"element={<Furniture/>}></Route>
          <Route exact path="/tools"element={<Tools/>}></Route>
          <Route exact path="/child"element={<Child/>}></Route>
          <Route exact path="/phone"element={<Phone/>}></Route>
          <Route exact path="/toys"element={<Toys/>}></Route>
          <Route exact path="/sports"element={<Sports/>}></Route>
          <Route exact path="/health"element={<Health/>}></Route>
          <Route exact path="/dchild"element={<Dchild/>}></Route>
          <Route exact path="/ddevices"element={<Ddevices/>}></Route>
          <Route exact path="/dphone"element={<Dphone/>}></Route>
          <Route exact path="/dsports"element={<Dsports/>}></Route>
          <Route exact path="/dtoys"element={<Dtoys/>}></Route>

          </Routes>
          <Footer/>
        </Router></CartProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
