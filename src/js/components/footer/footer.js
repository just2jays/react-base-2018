import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <nav className="footer-nav-wrapper">
        <ul className="footer-link-container">
          <li className="footer-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
        </nav>
      </footer>
    );
  }
}