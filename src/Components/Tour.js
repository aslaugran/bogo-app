import React, { Component } from "react";
import Slider from "react-slick";

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onTourSelected(this.props.data);
  }
  render() {
    const { img, title, subtitle, price } = this.props.data;
    return (
      <div onClick={() => this.handleClick()}>
        <h3 className="tour_title">{title}</h3>
      </div>
    );
  }
}
