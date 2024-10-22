import { CartProvider } from "./CartContext";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
};

export default App;
