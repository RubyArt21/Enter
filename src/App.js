import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer.js'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Contacts from './Contacts.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/services" component={Services} />

            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
