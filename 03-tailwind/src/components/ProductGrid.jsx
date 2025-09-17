import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductGrid = ({ products, isLoading }) => {
  const skeletons = Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />);

  return (
    <div
      className="grid gap-5 max-w-[1400px] mx-auto grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      role="list"
      aria-label="Lista de produtos"
    >
      {isLoading ? skeletons : products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
};
export default ProductGrid;
