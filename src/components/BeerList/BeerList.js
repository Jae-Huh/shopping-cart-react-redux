import React from 'react'
import { connect } from 'react-redux'

import './BeerList.css'
import BeerListItem from '../BeerListItem/BeerListItem'

const BeerList = (props) => {
  function listBeers () {
    return props.beers.map(beer => {
      return <BeerListItem beerName={beer.name} brewery={beer.brewery} style={beer.style} country={beer.country} abv={beer.abv} key={beer.id} />
    })
  }

  return (
    <div className="beer-list">
    {listBeers()}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(BeerList)
