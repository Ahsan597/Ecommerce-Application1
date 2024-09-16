import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Products/Product';
import Order from './components/Orders/Order';
import Sales from './components/sales/Sales';
import Allproducts from './components/Products/Allproducts';
import Updateproduct from './components/Products/Updateproduct';


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
