import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
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
    { id: 1, title: "Tênis Esportivo Pro", price: 350.50, rating: 4.5, tag: "Novo", image: '/src/assets/images/tenis.jpg' },
    { id: 2, title: "Fone de Ouvido Sem Fio", price: 199.90, rating: 4.8, tag: "Promo", image: '/src/assets/images/fone.jpg' },
    { id: 3, title: "Mochila para Notebook", price: 250.00, rating: 4.6, tag: null, image: '/src/assets/images/mochila.jpg' },
    { id: 4, title: "Garrafa Térmica Inox", price: 89.99, rating: 4.9, tag: "Novo", image: '/src/assets/images/garrafa.jpg' },
    { id: 5, title: "Mousepad Gamer RGB", price: 120.00, rating: 4.7, tag: null, image: '/src/assets/images/mousepad.jpg' },
    { id: 6, title: "Cadeira de Escritório Ergonômica", price: 1250.00, rating: 4.8, tag: "Promo", image: '/src/assets/images/cadeira.jpg' },
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