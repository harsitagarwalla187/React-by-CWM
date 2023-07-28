import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
