import React from 'react';
import styles from '../Styles/OrderSection.module.css';
import Button from '../Components/Button';

const OrderSection = () => {
  const reminders = [
    {
      id: 1,
      title: "",
      text: "We bake every morning in small batches. For same-day cravings, give us a quick call!",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400"
    },
    {
      id: 2,
      title: "Order Window",
      text: "Orders placed after 4 PM roll over to the next morning's bake. Still oven-fresh, never frozen.",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400"
    },
    {
      id: 3,
      title: "Pickup & Delivery Hours",
      text: "9 AM – 5 PM, Monday to Saturday. *Sundays are for rest, recipe testing, and probably more cookies.",
      imageUrl: "https://i.pinimg.com/1200x/be/75/96/be7596618eff0aa13e28fff4617028dc.jpg"
    },
    {
      id: 4,
      title: "",
      text: "Planning a celebration, office treat, or weekend brunch? Place your order 24–48 hours ahead to make sure everything's warm, perfect, and on time.",
      imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400"
    }
  ];

  return (
    <div className={styles['order-container']}>
      
      {/* ================= ORDER REMINDERS ================= */}
      <section className={styles['reminders-section']}>
        <h2 className={styles['section-title']}>Order Reminders</h2>
        <div className={styles['reminders-grid']}>
          {reminders.map((card, idx) => (
            <div key={card.id} className={styles['reminder-card']} style={{ '--index': idx }}>
              <div className={styles['card-image-box']}>
                <img src={card.imageUrl} alt="Bakery item" />
              </div>
              <div className={styles['card-text-box']}>
                {card.title && <h3 className={styles['card-title']}>{card.title}</h3>}
                <p className={styles['card-text']}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= READY TO ORDER SPLIT VIEW ================= */}
      <section className={styles['booking-section']}>
        <div className={styles['cta-column']}>
          <h2 className={styles['cta-title']}>Ready to order?</h2>
          <p className={styles['cta-subtitle']}>
            Just fill in your cravings! Tell us what you want, how much you need, and when you'd like it.
          </p>
        </div>

        <div className={styles['form-column']}>
          <form className={styles['order-form']} onSubmit={(e) => e.preventDefault()}>
            <h3 className={styles['form-heading']}>Order Form</h3>
            
            <div className={styles['form-group']}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" required />
            </div>

            <div className={styles['form-group']}>
              <label>Your order</label>
              <input type="text" placeholder="Product 1" className={styles['disabled-like-placeholder']} readOnly />
              <input type="text" placeholder="Product 2" className={styles['disabled-like-placeholder']} readOnly />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="quantity">Quantity</label>
              <input type="text" id="quantity" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="details">Delivery address and special requests</label>
              <textarea id="details" rows="3"></textarea>
            </div>
            <Button text="Submit Order" variant="Submit" type="submit"/>
            <span className={styles['form-footer-note']}>Your name won't be shared. Never submit passwords.</span>
          </form>
        </div>
      </section>

    </div>
  );
};

export default OrderSection;