import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img src={product.image} alt={product.title} />
        {product.tag && (
          <span className={`${styles.productTag} ${styles[product.tag.toLowerCase()]}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3>{product.title}</h3>
        <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
        <div className={styles.rating}>⭐ {product.rating}</div>
        <button className={styles.addToCartBtn}>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;