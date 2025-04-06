import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./product-details.module.css";

type IParams = { id: string; name: string };
interface IProps { products: Store.IProduct[] }

const ProductDetailsPage = ({ products }: IProps) => {
  const params = useParams<IParams>();
  const [product, setProduct] = useState<Store.IProduct | undefined>();

  useEffect(() => {
    const p = products?.find(prod => prod.id === Number(params.id));
    setProduct(p);
  }, [params, products]);

  if (!product) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Product not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        <div className={styles.imageContainer}>
          <img
            src={product.imageURL}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.category}>{product.category}</div>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>
            ${product.price.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </div>

          <p className={styles.description}>{product.desc}</p>

          <div className={styles.stockInfo}>
            <span>Status:</span>
            {product.inStock ? (
              <span className={styles.inStock}>In Stock</span>
            ) : (
              <span className={styles.outOfStock}>Out of Stock</span>
            )}
          </div>

          <div className={styles.wishlistCounter}>
            ❤️<span>{product.wishListCounter} people added this to their wishlist</span>
          </div>

          <button
            className={styles.button}
            disabled={!product.inStock}
          >
            🛒
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;