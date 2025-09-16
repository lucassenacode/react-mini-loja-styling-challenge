import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

const ProductGrid = ({ products, isLoading }) => { 
  
  // Cria um array de 6 posições para renderizar os skeletons
  const skeletonItems = Array.from({ length: 6 }).map((_, index) => (
    <SkeletonCard key={index} />
  ));

  return (
    <div className="product-grid">
      {isLoading ? skeletonItems : products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;