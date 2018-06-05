import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Waffles from './Components/Waffles';
import Events from './Components/Events';
import EventsInfo from './Components/Events-Info';
import Maps from './Components/Map';
import Franchise from './Components/Franchise';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navigation />
        <div className = "container-fluid">
          <Home />
          <About />
          <Waffles />
          <Events />
          <EventsInfo />
          <Maps/>
          <Franchise />
        </div>
      </div>
    );
  }
}

export default App;
