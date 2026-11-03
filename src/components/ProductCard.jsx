import styles from "./ProductCard.module.css";

export default function ProductCard() {
  const product = {
    title: "Glow Dew Rose Face Serum",
    price: 3450,
    inStock: true,
  };

  return (
    <article className={styles.card}>
      <span className={styles.badge}>Bestseller</span>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>Rs {product.price.toLocaleString()}</p>
      <p className={styles.stock}>
        {product.inStock ? "✨ In Stock (Ready to Glow)" : "Out of Stock"}
      </p>
      <button className={styles.button} disabled={!product.inStock}>
        Add to Bag 🛍️
      </button>
    </article>
  );
}