
const SkeletonCard = () => {
  return (
    // Usa a mesma classe do card real para evitar "layout shift"
    <div className="product-card skeleton">
      <div className="skeleton-image"></div>
      <div className="card-content">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-price"></div>
        <div className="skeleton-line skeleton-rating"></div>
        <div className="skeleton-line skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;