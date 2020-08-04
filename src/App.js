import React, { Component } from 'react'
import Header from './components/Header';
import HeroTitle from './components/HeroTitle';
import HeroItem from './components/HeroItem';
import './app.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col item-container base-container">
            <HeroItem
              titleTop="Basement"
              titleBottom="Renovations"
              link="https://agmrenovations.com/"
            />
          </div>
          <div className="col item-container bath-container">
            <HeroItem
              titleTop="Bathroom"
              titleBottom="Renovations"
              link="https://bathroomrenovations.com/"
            />
          </div>
          <HeroTitle />
        </div>
        <Header />
      </div>
    )
  }
}

export default App;

