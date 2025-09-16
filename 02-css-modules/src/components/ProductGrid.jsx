import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';
import SkeletonCard from './SkeletonCard';

const ProductGrid = ({ products, isLoading }) => {
  const skeletonItems = Array.from({ length: 6 }).map((_, index) => (
    <SkeletonCard key={index} />
  ));

  return (
    // Usa a classe 'productGrid' do objeto 'styles'
    <div className={styles.productGrid}>
      {isLoading ? skeletonItems : products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;