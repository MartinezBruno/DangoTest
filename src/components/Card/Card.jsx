import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, price, description, image, index }) => {
  return (
    <div className={styles.card}>
      <span className={styles.card_flag}>{index}</span>
      <img src={image} alt={title} className={styles.card_image} />
      <div>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.card_price}>
          {price}
          <input className={styles.card_quantity} placeholder={1} type='number' min={1} />
        </p>
        <p className={styles.card_description}>{description}</p>
      </div>
      <button className={styles.card_button}>Add to cart</button>
      <a href='#'>Learn More</a>
    </div>
  )
}

export default Card
