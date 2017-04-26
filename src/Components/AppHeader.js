import React, { Component } from 'react';

export default class AppHeader extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  }

  render() {
    return (
      <header>
        <div className="header">
          <div className="logo_area">
            <img className="logo" src={process.env.PUBLIC_URL + "/img/logo-borg.png"} alt="" />
          </div>
          <div className="vertical_line">
          </div>
          <div className="cart_area">
            <div className="vertical_line"></div>
            <img className="cart_icon" src={process.env.PUBLIC_URL + "/img/cart_icon.svg"} alt="" />
          </div>
        </div>
      </header>
    );
  }
}
