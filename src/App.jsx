import { CartProvider } from "./CartContext";
import Fetch from "./Fetch";
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
