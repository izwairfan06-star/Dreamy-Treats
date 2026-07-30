import React from 'react'
import styles from '../Styles/Home.module.css'
import Button from '../Components/Button'
const Home = () => {
  return (
    <>
        <div style={{position:"relative"}}>
          <div className={styles.img}></div>
          <div className={styles.text}>
            <h1>Oven Fresh.</h1>
            <h1>Online. On Time.</h1>
            <p>Welcome to our online bakery! Every bread,</p>
            <p>cookie,and pastery is backed to order and </p>
            <p>arrives right when you need them</p>
            <Button text="Order Fresh Today" variant="Order Fresh Today"/>
          </div>
        </div>
        <section className={styles.introSection}>
          <h2 className={styles.introHeading}>Baked Deliciously <br /> Everyday</h2>
          <p className={styles.introText}>Golden crusts, gooey middles, and goodness <br /> baked in every batch</p>
        </section>
        <section className={styles.categoriesSection}>
  {/* Item 1 */}
  <div className={styles.categoryCard}>
    <div className={styles.cardNumber}>[1]</div>
    <h3 className={styles.cardTitle}>Breads</h3>
    <div className={styles.imageWrapper}>
      <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500" alt="Breads" />
    </div>
  </div>

  {/* Item 2 */}
  <div className={styles.categoryCard}>
    <div className={styles.cardNumber}>[2]</div>
    <h3 className={styles.cardTitle}>Cookies</h3>
    <div className={styles.imageWrapper}>
      <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=500" alt="Cookies" />
    </div>
  </div>

  {/* Item 3 */}
  <div className={styles.categoryCard}>
    <div className={styles.cardNumber}>[3]</div>
    <h3 className={styles.cardTitle}>Pastries</h3>
    <div className={styles.imageWrapper}>
      <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500" alt="Pastries" />
    </div>
  </div>

  {/* Item 4 */}
  <div className={styles.categoryCard}>
    <div className={styles.cardNumber}>[4]</div>
    <h3 className={styles.cardTitle}>Cakes</h3>
    <div className={styles.imageWrapper}>
      <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500" alt="Cakes" />
    </div>
  </div>
</section>
    </>
  )
}

export default Home