import React, { Component } from "react";
import Tour from "./Tour";
import tours from "../json/tours.json";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    const { categoryId } = this.props;

    // console.log(
    //   "http://www.extranet.bogo.is/api/tours/58fcc108ecc2cc0282ccad6e" +
    //     categoryId
    // );

    setTimeout(() => {
      this.setState({
        tours: tours.data
      });
    }, 200);
  }

  render() {
    const { tours } = this.state;

    if (tours.length === 0) {
      return <div>LOADING</div>;
    }
    const toursList = tours.map((tour, index) => {
      return (
        <Tour
          data={tour}
          key={index}
          onTourSelected={this.props.onTourSelected}
        />
      );
    });

    return <div>{toursList}</div>;
  }
}
