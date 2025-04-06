import { useContext } from 'react';
import styles from './cart.module.css';
import { CartContext } from '../../providers/cart-provider';

interface IProps {
  products: Store.IProduct[];
}

const CartPage = ({ products }: IProps) => {
  const { cart } = useContext(CartContext);
  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return product ? { ...product, count: item.count } : null;
  }).filter((item): item is Store.IProduct & { count: number } => item !== null);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyCart}>
          🛒 Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          🛒 Shopping Cart
        </h1>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.imageContainer}>
              <img src={item.imageURL} alt={item.name} className={styles.image} />
            </div>

            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemPrice}>
                ${(item.price * item.count).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
            </div>

            <div className={styles.quantityControls}>
              <button
                className={styles.quantityButton}
              >
                ➖
              </button>
              <span className={styles.quantity}>{item.count}</span>
              <button
                className={styles.quantityButton}
              >
                ➕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span className={styles.total}>
            ${calculateTotal().toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        </div>

        <button className={styles.checkoutButton}>
          Checkout 💳
        </button>
      </div>
    </div>
  );
};

export default CartPage;