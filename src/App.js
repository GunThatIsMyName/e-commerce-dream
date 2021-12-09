import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./page/Cart";
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleItem from "./page/SingleItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleItem />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
