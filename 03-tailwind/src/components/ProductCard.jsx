import Button from "./Button";

const ProductCard = ({ product }) => {
  // cores exatas do Global
  const tagClass =
    product.tag?.toLowerCase() === "novo"
      ? "bg-[#27ae60]"
      : product.tag?.toLowerCase() === "promo"
      ? "bg-[#e67e22]"
      : "";

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-[8px] bg-[var(--card)] transition-transform duration-200"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full aspect-square object-cover"
        />

        {/* tag com 0.8em, padding 4x8, canto 4px e offset 10px */}
        {product.tag && (
          <span
            className={`absolute top-[10px] right-[10px] ${tagClass} text-white font-bold text-[0.8em] px-2 py-1 rounded-[4px]`}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* mesmos espaçamentos do Global: 15 / 10 / 10 / 15 */}
      <div className="flex flex-col flex-1 p-[15px]">
        {/* título 1.1em, altura 2.4em e line-height 1.2 */}
        <h3
          className="text-[1.1em] font-normal leading-[1.2] h-[2.4em] overflow-hidden text-ellipsis mb-[10px]"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* preço 1.3em */}
        <p className="text-[1.3em] font-bold text-[var(--primary)] mb-[10px]">
          R$ {product.price.toFixed(2)}
        </p>

        <div className="mb-[15px]">⭐ {product.rating}</div>

        <Button className="mt-auto">Adicionar</Button>
      </div>

      {/* hover shadow como no Global */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ boxShadow: "var(--shadow-hover)" }}
      />
    </div>
  );
};

export default ProductCard;
