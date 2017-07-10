import React from 'react'
import { connect } from 'react-redux'

import './BeerList.css'
import BeerListItem from '../BeerListItem/BeerListItem'
import { addToCart } from '../../actions'

const BeerList = (props) => {
  function listBeers () {
    return props.beers.map(beer => {
      return <BeerListItem beerName={beer.name} brewery={beer.brewery} style={beer.style} country={beer.country} abv={beer.abv} key={beer.id} addToCart={props.addToCart} />
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

function mapDispatchToProps (dispatch) {
  return {
    addToCart: beer => {
      dispatch(addToCart(beer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList)
