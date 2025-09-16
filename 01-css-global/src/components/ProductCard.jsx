
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
        {product.tag && (
          <span className={`product-tag ${product.tag.toLowerCase()}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="price">R$ {product.price.toFixed(2)}</p>
        <div className="rating">⭐ {product.rating}</div>
        <button className="add-to-cart-btn">Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;