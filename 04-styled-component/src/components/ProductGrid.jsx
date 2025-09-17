// src/components/ProductGrid.jsx
import styled from "styled-components";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const Grid = styled.div`
  display: grid;
  gap: 20px;
  max-width: 1400px;
  margin: 20px auto;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductGrid = ({ products, isLoading }) => {
  const skeletons = Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />);
  return (
    <Grid aria-label="Lista de produtos">
      {isLoading ? skeletons : products.map(p => <ProductCard key={p.id} product={p} />)}
    </Grid>
  );
};

export default ProductGrid;
