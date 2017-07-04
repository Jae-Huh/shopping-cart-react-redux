import React from 'react'

import './App.css'
import BeerList from './BeerList/BeerList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BeerList />
      </div>
    )
  }
}

export default App
