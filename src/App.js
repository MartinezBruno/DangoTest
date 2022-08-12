import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import image from './assets/images/img-not-found.jpg'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'

import data from './data.json'

const INITIAL_STATE = data

function App() {
  const [infoCards, setInfoCards] = useState(INITIAL_STATE.cards)
  const [total, setTotal] = useState(0)
  const [fontSize, setFontSize] = useState(1.5)

  const getRangeValue = value => {
    setFontSize(value)
  }

  const changeCardTitle = title => {
    const value = 0
    setInfoCards(
      infoCards.map((card, index) => {
        if (index === value) {
          return { ...card, title }
        }
        return card
      })
    )
  }

  const changeQuantity = (value, index) => {
    data.cards[index].quantity = parseInt(value)
    let total = infoCards.reduce((acc, curr) => acc + curr.quantity, 0)
    setTotal(total)
  }

  return (
    <div>
      <NavBar setFontSize={getRangeValue} setTitle={changeCardTitle} quantity={total} />
      <div className={styles.container}>
        {infoCards.map((item, index) => (
          <Card
            key={index}
            index={index}
            title={item.title}
            price={item.price}
            description={item.description}
            image={image}
            quantity={item.quantity}
            fontSize={fontSize}
            getQuantity={changeQuantity}
          />
        ))}
      </div>
    </div>
  )
}

export default App
