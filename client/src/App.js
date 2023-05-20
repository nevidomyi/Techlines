import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import { Footer } from "./components/Footer";
import { LandingScreen } from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />}></Route>
          </Routes>
        </main>

        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
