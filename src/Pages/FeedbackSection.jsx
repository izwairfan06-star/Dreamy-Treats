import React, { useState } from 'react';
import styles from '../Styles/FeedbackSection.module.css';
import Button from '../Components/Button';

const FeedbackSection = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const emojis = [
    { value: 1, label: '😢' },
    { value: 2, label: '🙁' },
    { value: 3, label: '😐' },
    { value: 4, label: '🙂' },
    { value: 5, label: '😀' },
  ];

  return (
    <div className={styles.feedback_container}>
      
      {/* ================= MAIN SPLIT SECTION ================= */}
      <section className={styles.main_split}>
        <div className={styles.text_side}>
          <h2 className={styles.main_title}>We’re always kneading ways to improve.</h2>
          <p className={styles.sub_text}>
            Tell us what made you smile or what you’d love to see more.
          </p>
        </div>

        <div className={styles.form_side}>
          <form className={styles.feedback_form}>
            
            <div className={styles.form_group}>
              <label htmlFor="user-email">Your email</label>
              <input type="email" id="user-email" required />
            </div>

            <div className={styles.form_group}>
              <label>How would you rate our service overall?</label>
              <div className={styles.rating_container}>
                {emojis.map((emoji) => (
                  <button
                    key={emoji.value}
                    type="button"
                    className={`${styles.rating_box} ${
                      selectedRating === emoji.value ? styles.active_rating : ''
                    }`}
                    onClick={() => setSelectedRating(emoji.value)}
                    aria-label={`Rate ${emoji.value} out of 5`}
                  >
                    <span className={styles.emoji_icon}>{emoji.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="reason">Please share the reason for your rating.</label>
              <textarea id="reason" rows="3"></textarea>
            </div>

            <Button text="Submit Feedback" variant="Submit"/>
            
            <span className={styles.footer_note}>
              Your name won't be shared. Never submit passwords.
            </span>
          </form>
        </div>
      </section>

      {/* ================= BOTTOM IMAGE ROW ================= */}
      <div className={styles.banner_image_wrapper}>
        <img 
          src="https://i.pinimg.com/1200x/44/27/a7/4427a7b716276877f9723e578ca08b01.jpg" 
          alt="Freshly baked dark oats buns close up" 
          className={styles.banner_image}
        />
      </div>

    </div>
  );
};

export default FeedbackSection;