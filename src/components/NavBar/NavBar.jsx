import React from 'react'

const NavBar = ({ infoCardsLength, algo }) => {
  let index = 0
  const handleChange = e => {
    e.target.localName === 'select' && (index = e.target.value)
    e.target.localName === 'input' && (algo(e.target.value, index))
    // console.log(e.target.localName, ' ', e.target.value)
  }

  return (
    <div>
      <div>
        <form onChange={handleChange}>
          <input type='text' placeholder='Cambia el titulo' />
          <select name='idSelector' id='idSelector'>
            {(() => {
              let options = []
              for (let i = 0; i < infoCardsLength; i++) {
                options.push(<option key={i} value={i}>{i}</option>)
              }
              return options
            })()}
          </select>
        </form>
      </div>
    </div>
  )
}

export default NavBar
