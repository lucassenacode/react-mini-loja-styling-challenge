// src/App.jsx
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

import imgCadeira from "./assets/images/cadeira.jpg";
import imgFone from "./assets/images/fone.jpg";
import imgGarrafa from "./assets/images/garrafa.jpg";
import imgMochila from "./assets/images/mochila.jpg";
import imgMousepad from "./assets/images/mousepad.jpg";
import imgTenis from "./assets/images/tenis.jpg";

function App() {
  const [themeName, setThemeName] = useState(() => localStorage.getItem("theme") || "light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => setThemeName(t => (t === "light" ? "dark" : "light"));
  const theme = themeName === "light" ? lightTheme : darkTheme;

  const productsData = [
    { id: 1, title: "Tênis Esportivo Pro", price: 350.50, rating: 4.5, tag: "Novo",  image: imgTenis },
    { id: 2, title: "Fone de Ouvido Sem Fio", price: 199.90, rating: 4.8, tag: "Promo", image: imgFone },
    { id: 3, title: "Mochila para Notebook",  price: 250.00, rating: 4.6, tag: null,   image: imgMochila },
    { id: 4, title: "Garrafa Térmica Inox",    price: 89.99, rating: 4.9, tag: "Novo",  image: imgGarrafa },
    { id: 5, title: "Mousepad Gamer RGB",      price: 120.00, rating: 4.7, tag: null,   image: imgMousepad },
    { id: 6, title: "Cadeira de Escritório Ergonômica", price: 1250.00, rating: 4.8, tag: "Promo", image: imgCadeira },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar theme={themeName} toggleTheme={toggleTheme} />
      <main>
        <ProductGrid products={productsData} isLoading={isLoading} />
      </main>
    </ThemeProvider>
  );
}

export default App;
