import React, { Component } from "react";

export default class TourDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("data er: ", this.props.data);
    return (
      <div className="single_tour_container" onClick={() => this.handleClick()}>
        <div className="hero_container">
          <div className="hero_button_group">
            <div className="btn_photo_group">
              <img
                className="hero_img"
                src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
                alt=""
              />
              <button>Photos</button>

            </div>
            <button>Photos</button>
            <button>Photos</button>
          </div>

          <img
            className="hero_img"
            src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
            src={this.props.data.mainphoto}
            alt=""
          />
        </div>
        <div className="title">
          {this.props.data.name}
          {this.props.data.tourid}
        </div>
      </div>
    );
  }
}
