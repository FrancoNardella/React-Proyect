import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { CartProvider } from "./components/Cart/CartContext.jsx";
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <Routes />
      <GlobalStyles />
      <Toaster />
    </CartProvider>
  );
}

export default App;
