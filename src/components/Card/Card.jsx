import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, price, description, quantity, image, fontSize, getQuantity, index }) => {
  const handleChange = e => {
    getQuantity(e.target.value, index)
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card_image} />
      <div>
        <h3 className={styles.card_title} style={{ fontSize: `${fontSize}rem` }}>
          {title}
        </h3>
        <p className={styles.card_price}>
          {price}
          <input
            className={styles.card_quantity}
            type='number'
            min={0}
            onChange={handleChange}
            value={quantity}
          />
        </p>
        <p className={styles.card_description}>{description}</p>
      </div>
      <div className={styles.card_footer}>
        <button className={styles.card_button}>Add to cart</button>
        <a href='#'>Learn More</a>
      </div>
    </div>
  )
}

export default Card
