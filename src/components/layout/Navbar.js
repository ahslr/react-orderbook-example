import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Orderbook_logo.svg'
import Icon from '../Icon';

const Navbar = () => {

  return (
    <nav className="navbar bg-darker">
      <div className="display-flex">
        <h1 className="text-primary">
          <img src={Logo} alt="Logo" className="hide-sm"/>
          Orderbook
        </h1>
      </div>
      <ul className="display-flex align-center">
        <li>
          <Link to="/orderbookl2" className="text-bold">
            OrderbookL2
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon type="home" size="2x"/>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Icon type="info" size="2x"/>
          </Link>
        </li>
        <li>
          <a href="https://github.com/ahslr/react-orderbook-example" target="_blank" rel="noopener noreferrer">
            <Icon type="github" size="2x"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;