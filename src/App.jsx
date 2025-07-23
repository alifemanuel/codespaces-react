import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { Route, Routes } from "react-router";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeAllFromCart() {
    setCart([]);
  }

  function removeFromCart(product) {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  }

  return (
    // React Fragment
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeAllFromCart={removeAllFromCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}
