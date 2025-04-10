import { Link } from 'react-router';
import classes from './home.module.css';

const HomePage = () => {

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <h1 className={classes.brandTitle}>Sarah Express</h1>
        <p className={classes.brandTagline}>Quality Products, Swift Delivery</p>
        <div className={classes.buttonGroup}>
          <Link to="/categories" className={classes.primaryButton}>
            🏷️ View Categories
          </Link>
          <Link to="/cart" className={classes.primaryButton}>
            🛒 View Cart
          </Link>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.section}>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60"
            alt="Fast Delivery"
            className={classes.sectionImage}
          />
          <div className={classes.sectionText}>
            <h2>Swift Delivery Service</h2>
            <p>Experience lightning-fast delivery right to your doorstep. Our dedicated team ensures your packages arrive safely and on time.</p>
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionText}>
            <h2>Quality Guaranteed</h2>
            <p>We stand behind every product we sell. Our quality assurance team carefully inspects each item to meet our high standards.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=60"
            alt="Quality Products"
            className={classes.sectionImage}
          />
        </div>

        <div className={classes.section}>
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60"
            alt="Customer Service"
            className={classes.sectionImage}
          />
          <div className={classes.sectionText}>
            <h2>24/7 Customer Support</h2>
            <p>Our dedicated support team is always here to help. Get assistance anytime, anywhere with our round-the-clock customer service.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;