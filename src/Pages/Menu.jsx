import React from 'react';
import styles from '../Styles/Menu.module.css';

const Menu = () => {
  const breadItems = [
    {
      id: 1,
      name: 'Sourdough Loaf',
      price: '$8.50',
      imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=500',
    },
    {
      id: 2,
      name: 'Banana Bread',
      price: '$7.25',
      imageUrl: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=500', 
    },
    {
      id: 3,
      name: 'Wheat Loaf',
      price: '$6.00',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500', 
    },
    {
      id: 4,
      name: 'Baguette',
      price: '$5.50',
      imageUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=500', 
    },
  ];

  const pastryItems = [
    {
      id: 5,
      name: 'Butter Croissant',
      price: '$4.75',
      imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500',
    },
    {
      id: 6,
      name: 'Cream Puffs',
      price: '$5.25',
      imageUrl: 'https://i.pinimg.com/1200x/8c/0f/fb/8c0ffb69af11c98742d907389378cf7f.jpg',
    },
    {
      id: 7,
      name: 'Cinnamon Roll',
      price: '$5.00',
      imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=500',
    },
    {
      id: 8,
      name: 'Baklawa',
      price: '$5.50',
      imageUrl: 'https://i.pinimg.com/736x/f2/1c/4e/f21c4ec78de1ad7e7c6c3fa18eb23e3b.jpg',
    },
  ];

  const dessertItems = [
    {
      id: 9,
      name: 'Mini Raspberry Mousse Cakes ',
      price: '$8.00',
      imageUrl: 'https://i.pinimg.com/1200x/10/78/bc/1078bc54bf11b89fd970b8ceff3a45ae.jpg',
    },
    {
      id: 10,
      name: 'Joyces Harem',
      price: '$8.50',
      imageUrl: 'https://i.pinimg.com/736x/93/a3/67/93a367d54a6f0f4b58220475a421f918.jpg',
    },
    {
      id: 11,
      name: 'Macaron Box (6pc)',
      price: '$12.00',
      imageUrl: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=500',
    },
    {
      id: 12,
      name: 'Fudge Brownie',
      price: '$4.50',
      imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500',
    },
  ];

  const cakeItems = [
    {
      id: 13,
      name: 'Chocolate Truffle',
      price: '$7.50',
      imageUrl: 'https://i.pinimg.com/1200x/34/49/57/3449574db944e5294f134d9d3021f5bc.jpg',
    },
    {
      id: 14,
      name: 'Red Velvet',
      price: '$8.00',
      imageUrl: 'https://i.pinimg.com/736x/b2/d1/d2/b2d1d22f230b31aee5043ed025e7a4cf.jpg',
    },
    {
      id: 15,
      name: 'Black Forest Chiffon Cake',
      price: '$7.00',
      imageUrl: 'https://i.pinimg.com/736x/e5/82/00/e58200bd74a3c37c013b097e42ea376e.jpg',
    },
    {
      id: 16,
      name: 'Carrot Cake',
      price: '$8.50',
      imageUrl: 'https://i.pinimg.com/1200x/be/75/96/be7596618eff0aa13e28fff4617028dc.jpg',
    },
  ];

  return (
    <div className={styles['menu-container']}>
      
      {/* ================= BREADS SECTION [1] ================= */}
      <section className={styles['menu-section']}>
        <header className={styles['section-header']}>
          <span className={styles['section-number']}>[1]</span>
          <h2 className={styles['section-title']}>Breads</h2>
          <p className={styles['section-subtitle']}>Crusty, soft, and soulful</p>
        </header>

        <div className={styles['menu-grid']}>
          {breadItems.map((item, index) => (
            <div key={item.id} className={styles['menu-card']} style={{ '--index': index }}>
              <div className={styles['image-container']}>
                <img src={item.imageUrl} alt={item.name} className={styles['menu-image']} />
              </div>
              <div className={styles['menu-details']}>
                <h3 className={styles['menu-name']}>{item.name}</h3>
                <span className={styles['menu-price']}>[{item.price}]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PASTRIES SECTION [2] ================= */}
      <section className={styles['menu-section']}>
        <header className={styles['section-header']} style={{ animationDelay: '0.2s' }}>
          <span className={styles['section-number']}>[2]</span>
          <h2 className={styles['section-title']}>Pastries</h2>
          <p className={styles['section-subtitle']}>Flaky, sweet, and golden brown</p>
        </header>

        <div className={styles['menu-grid']}>
          {pastryItems.map((item, index) => (
            <div key={item.id} className={styles['menu-card']} style={{ '--index': index + 2 }}>
              <div className={styles['image-container']}>
                <img src={item.imageUrl} alt={item.name} className={styles['menu-image']} />
              </div>
              <div className={styles['menu-details']}>
                <h3 className={styles['menu-name']}>{item.name}</h3>
                <span className={styles['menu-price']}>[{item.price}]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESSERTS SECTION [3] ================= */}
      <section className={styles['menu-section']}>
        <header className={styles['section-header']} style={{ animationDelay: '0.4s' }}>
          <span className={styles['section-number']}>[3]</span>
          <h2 className={styles['section-title']}>Desserts</h2>
          <p className={styles['section-subtitle']}>Sweet treats and delicate confections</p>
        </header>

        <div className={styles['menu-grid']}>
          {dessertItems.map((item, index) => (
            <div key={item.id} className={styles['menu-card']} style={{ '--index': index + 4 }}>
              <div className={styles['image-container']}>
                <img src={item.imageUrl} alt={item.name} className={styles['menu-image']} />
              </div>
              <div className={styles['menu-details']}>
                <h3 className={styles['menu-name']}>{item.name}</h3>
                <span className={styles['menu-price']}>[{item.price}]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAKES SECTION [4] ================= */}
      <section className={styles['menu-section']}>
        <header className={styles['section-header']} style={{ animationDelay: '0.6s' }}>
          <span className={styles['section-number']}>[4]</span>
          <h2 className={styles['section-title']}>Cakes</h2>
          <p className={styles['section-subtitle']}>Decadent layers celebrating fine baking</p>
        </header>

        <div className={styles['menu-grid']}>
          {cakeItems.map((item, index) => (
            <div key={item.id} className={styles['menu-card']} style={{ '--index': index + 6 }}>
              <div className={styles['image-container']}>
                <img src={item.imageUrl} alt={item.name} className={styles['menu-image']} />
              </div>
              <div className={styles['menu-details']}>
                <h3 className={styles['menu-name']}>{item.name}</h3>
                <span className={styles['menu-price']}>[{item.price}]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Menu;