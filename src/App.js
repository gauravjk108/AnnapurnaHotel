import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Homepage from './homepage.js';
import About from './about.js';
import Contact from './contact.js';
import Booking from './booking.js';
import Feedback from './feedback';
import Gallery from './gallery.js';
import Services from './services.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/book' component={Booking}/>
          <Route path='/feedback' component={Feedback}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/services' component={Services}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
