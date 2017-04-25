import React, { Component } from "react";
import Tour from "./Tour";
import tours from "../json/tours.json";
import axios from "axios";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    const { categoryId } = this.props;

    axios
      .get("http://www.extranet.bogo.is/api/tours/58fcc108ecc2cc0282ccad6e")
      .then(response => {
        console.log(response);
        this.setState({ tours: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    // setTimeout(() => {
    //   this.setState({
    //     tours: tours.data
    //   });
    // }, 200);
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
