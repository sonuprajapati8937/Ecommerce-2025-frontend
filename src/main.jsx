import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

export const server = "https://ecommerce-2025-server-9vrf.onrender.com";

export const categories = [
  "Jeans",
  "Down Solder T-Shirt",
  "T-Shirt",
  "Half T-Shirt",
  "Full T-Shirt",
  "Sport T-Shirt",
  "Formal Shirt",
  "Cotton Shirt",
  "Full Shirt",
  "Half Shirt",
  "Lower",
  "Denim Shirt",
  "Half Lower",
  "Full Lower",
  "washing machine",
  "books",
  "jewelry",
  "toys",
  "makeup",
  "kitchenware",
  "gaming console",
  "fitness equipment",
  "groceries",
  "bags",
  "accessories",
  "furniture",
  "stationery",
  "car accessories",
  "motorcycle accessories",
  "sporting goods",
  "home decor",
  "healthcare products",
  "office supplies",
  "pet supplies",
  "power tools",
  "gardening tools",
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
