import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    // Usa as classes do objeto 'styles'
    <div className={`${styles.productCard} ${styles.skeleton}`}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.cardContent}>
        <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonPrice}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonRating}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;