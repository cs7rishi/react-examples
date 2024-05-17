import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import { Admin } from "./components/Admin"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"
import { ProductList } from "./components/ProductList";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";

function App() {

  const admin = true;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={admin ? <Admin/> : <Navigate to="/" />} />
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
