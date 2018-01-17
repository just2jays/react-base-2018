import React, { Component } from 'react';

class Nav extends Component {
  render() {
    // todo make this work with query params
    // https://github.com/reactjs/react-router/blob/master/examples/query-params/app.js
    return (
      <nav className="top-nav">
        <ul className="top-nav__link-container">
          <li className="top-nav__link">
            <a href="#">Boilerplate 2018</a>
          </li>
        </ul>
        <form
          className="top-nav__search-form"
          action="/search"
          method="GET"
          onSubmit={this.goToSearch}
        >
          <input
            className="top-nav__input"
            ref={searchQuery => {
              this.searchQuery = searchQuery;
            }}
            name="query"
            type="text"
            placeholder="Search"
          />
          <button
            className="top-nav__button"
            type="submit"
            onClick={this.goToSearch}
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Nav;