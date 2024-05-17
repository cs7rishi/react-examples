import { Routes, Route } from "react-router-dom"
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer"
import { ProductList } from "./components/ProductList";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/1001" element={<ProductDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
