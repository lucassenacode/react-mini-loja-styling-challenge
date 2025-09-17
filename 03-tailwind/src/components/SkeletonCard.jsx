const SkeletonCard = () => {
  return (
    <div className="skeleton skeleton-shimmer flex flex-col overflow-hidden rounded-lg" style={{ boxShadow: "var(--shadow)" }} aria-hidden="true">
      <div className="w-full aspect-square bg-black/5 dark:bg-white/10" />
      <div className="p-4 flex-1 flex flex-col">
        <div className="skeleton-line h-4 w-4/5 mb-2" />
        <div className="skeleton-line h-4 w-1/2 mb-2" />
        <div className="skeleton-line h-4 w-1/3 mb-4" />
        <div className="skeleton-line h-10 w-full mt-auto rounded-md" />
      </div>
    </div>
  );
};
export default SkeletonCard;
