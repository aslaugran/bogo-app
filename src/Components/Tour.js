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
      <div className="card_single">
        <div className="card" onClick={() => this.handleClick()}>
          <div className="card_tour_photo">
            <img
              className=""
              src={"http://www.extranet.bogo.is/" + mainphoto}
              alt=""
            />
          </div>
          <div className="card_text_container">
            <h3 className="card_tour_title">{name}</h3>
            <div className="sub-txt">
              <p className="card_subtitle">{introtext}</p>
              <p className="card_price">{priceadult}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
