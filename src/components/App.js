import React from 'react'

import './App.css'
import BeerList from './BeerList/BeerList'
import Cart from './Cart/Cart'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BeerList />
        <Cart />
      </div>
    )
  }
}

export default App
