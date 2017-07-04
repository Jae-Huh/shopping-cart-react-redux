import React from 'react'

import './BeerList.css'
import beers from '../../data/beers'
import BeerListItem from '../BeerListItem/BeerListItem'

const BeerList = () => {
  function listBeers () {
    return beers.beers.map(beer => {
      return <BeerListItem beerName={beer.name} brewery={beer.brewery} style={beer.style} country={beer.country} abv={beer.abv} key={beer.id} />
    })
  }

  return (
    <div className="beer-list">
    {listBeers()}
    </div>
  )
}

export default BeerList
