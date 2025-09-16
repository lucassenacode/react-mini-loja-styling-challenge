import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

import imgCadeira from './assets/images/cadeira.jpg';
import imgFone from './assets/images/fone.jpg';
import imgGarrafa from './assets/images/garrafa.jpg';
import imgMochila from './assets/images/mochila.jpg';
import imgMousepad from './assets/images/mousepad.jpg';
import imgTenis from './assets/images/tenis.jpg'; 

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  // 1. Adicionar estado de loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // 2. Simular o carregamento dos dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const productsData = [
     { id: 1, title: "Tênis Esportivo Pro", price: 350.50, rating: 4.5, tag: "Novo", image: imgTenis },
    { id: 2, title: "Fone de Ouvido Sem Fio", price: 199.90, rating: 4.8, tag: "Promo", image: imgFone },
    { id: 3, title: "Mochila para Notebook", price: 250.00, rating: 4.6, tag: null, image: imgMochila },
    { id: 4, title: "Garrafa Térmica Inox", price: 89.99, rating: 4.9, tag: "Novo", image: imgGarrafa },
    { id: 5, title: "Mousepad Gamer RGB", price: 120.00, rating: 4.7, tag: null, image: imgMousepad },
    { id: 6, title: "Cadeira de Escritório Ergonômica", price: 1250.00, rating: 4.8, tag: "Promo", image: imgCadeira },
  ];

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ProductGrid products={productsData} isLoading={isLoading} />
      </main>
    </div>
  )
}

export default App;