import React, { Component } from "react";

export default class TourDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("data er: ", this.props.data);
    return (
      <li className="" onClick={() => this.handleClick()}>
        {this.props.data.text}
      </li>
    );
  }
}
