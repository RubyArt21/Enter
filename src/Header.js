import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (

<div className="navBar" id="mainNavBar">

  <div className="logo"></div>
          <Link to="/contacts">Контакты</Link>
        <Link to="/about">О нас</Link>
        <Link to="/services">Услуги</Link>
    <Link to="/">Главная</Link>
<p className="z-depth-2">  </p>   </div>
    );
  }
}

export default Header
