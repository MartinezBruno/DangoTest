import React from 'react'
import styles from './NavBar.module.css'

const NavBar = ({ setTitle, setFontSize, quantity }) => {
  const handleChange = e => {
    let title = e.target.value === '' ? 'Sin Titulo' : e.target.value
    setTitle(title)
  }
  const handleFontSize = e => {
    console.log(e.target.value)
    setFontSize(e.target.value)
  }

  return (
    <div className={styles.navbar_container}>
      <div>
        <input
          type='text'
          placeholder='Cambia el titulo del primer producto'
          onChange={handleChange}ñ
        />
      </div>
      <div className={styles.navbar_range}>
        <label htmlFor='points'>Font size (between 1rem and 10rem):</label>
        <input
          type='range'
          id='points'
          name='points'
          min='1'
          max='10'
          defaultValue={'1.5'}
          step={0.5}
          onChange={handleFontSize}
        />
      </div>
      <div>
        <p className={styles.navbar_quantity}>Cantidad total de productos: {quantity}</p>
      </div>
    </div>
  )
}

export default NavBar
