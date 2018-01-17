import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './containers/layouts/MainLayout';
import Footer from './components/footer/footer';
import './app.scss';

export default class App extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="main-container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
