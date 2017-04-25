import React, { Component } from "react";

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("halló");
    this.props.onTourSelected(this.props.data);
  }
  render() {
    const { img, title, subtitle, price } = this.props.data;

    return (
      <li className="" onClick={() => this.handleClick()}>
        <img className="" src={img} alt="" />
        <h3 className="tour_title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <p className="price">{price}</p>
      </li>
    );
  }
}
