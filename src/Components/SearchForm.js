import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  render() {
    return (
      <header>
        <div className="header">
          <div className="logo_area">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
              alt=""
            />
          </div>
          <div className="vertical_line" />
          <div className="search_area">
            <form className="search-form" onSubmit={this.handleSubmit}>
              <label className="is-hidden" htmlFor="search" />
              <img
                className="search_icon"
                src={process.env.PUBLIC_URL + "/img/search_icon.svg"}
                alt=""
              />

              {/* <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button> */}
              {/* <input className="search_field"
                     type="search"
                     onChange={this.onSearchChange}
                     name="search"
                     placeholder="Search..." /> */}
            </form>
          </div>
          <div className="cart_area">
            <div className="vertical_line" />
            <img
              className="cart_icon"
              src={process.env.PUBLIC_URL + "/img/cart_icon.svg"}
              alt=""
            />
          </div>
        </div>
      </header>
    );
  }
}
