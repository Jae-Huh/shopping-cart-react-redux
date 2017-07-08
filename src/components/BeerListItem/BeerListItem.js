import React from 'react'

import './BeerListItem.css'

const BeerListItem = (props) => {
  return (
    <div className="beer-list-item">
      <h1 className="beer-name">{props.beerName}</h1>
      <div className="beer-origin-info">
        <h3 className="beer-brewery">{props.brewery}</h3>
        <h3 className="beer-country">{props.country}</h3>
      </div>
      <div className="beer-list-bottom">
        <div className="beer-details">
          <p className="beer-style">{props.style}</p>
          <p className="beer-abv">{props.abv}</p>
        </div>
        <div className="add-button-container">
          <button onClick={() => props.addToCart(props.beerName)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default BeerListItem
