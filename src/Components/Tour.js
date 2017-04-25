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
    const { mainphoto, name, introtext, priceadult } = this.props.data;

    return (
      <li className="" onClick={() => this.handleClick()}>
        <img
          className=""
          src={"http://www.extranet.bogo.is/" + mainphoto}
          alt=""
        />
        <h3 className="tour_title">{name}</h3>
        <p className="subtitle">{introtext}</p>
        <p className="price">{priceadult}</p>
      </li>
    );
  }
}
