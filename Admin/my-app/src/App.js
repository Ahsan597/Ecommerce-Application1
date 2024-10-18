import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/products/Product';
import Order from './pages/orders/Order';
import Sales from './pages/sales/Sales';
import Allproducts from './pages/products/Allproducts';
import Updateproduct from './pages/products/Updateproduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Home/>
        <Routes>
          <Route exact path='/addproduct' element={<Product/>}></Route>
          <Route exact path='/allproducts' element={<Allproducts/>}></Route>
          {/* <Route exact path='/allproducts/:id' element={<Allproducts/>}></Route> */}
          <Route exact path='/updateproduct/:id' element={<Updateproduct/>}></Route>
          <Route exact path='/order' element={<Order/>}></Route>
          <Route exact path='/sales' element={<Sales/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
