import React, { Component } from "react";

export default class TourDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("data er: ", this.props.data);
    return (
      <div className="single_tour_container" onClick={() => this.handleClick()}>
        {/*Hero container starts*/}
        <div className="hero_container">
          <div className="hero_button_group">

            <div className="btn_photo_group">
              <img
                className="btn_img"
                src={process.env.PUBLIC_URL + "/img/Icons/photos.svg"}
                alt=""
              />
              <p className="icon_txt">Photos</p>
            </div>
            <div className="btn_video_group">
              <img
                className="btn_img"
                src={process.env.PUBLIC_URL + "/img/Icons/video.svg"}
                alt=""
              />
              <p className="icon_txt">Video</p>
            </div>
            <div className="btn_map_group">
              <img
                className="btn_img"
                src={process.env.PUBLIC_URL + "/img/Icons/map.svg"}
                alt=""
              />
              <p className="icon_txt">Map</p>
            </div>

            <div className="hero_txt">
              <div className="single_tour_title">
                {this.props.data.name}
              </div>
              <div className="single_tour_subtitle">
                {this.props.data.introtext}
              </div>
            </div>
            <div className="hero_img">
              <img
                className="hero_img"
                // src={process.env.PUBLIC_URL + "/img/Icons/photos.svg"}
                src={"http://www.extranet.bogo.is/" + this.props.data.mainphoto}
                alt=""
              />
            </div>
          </div>
        </div>
        {/*Hero container finish*/}
        <div className="txt_container">
          {/*Tour description starts*/}
          <div className="tour_detail">
            <h3 className="single_tour_txt_title">
              {this.props.data.tourtitle}
            </h3>
            <p className="main_tour_txt">{this.props.data.description}</p>
          </div>
          {/*Tour description finish*/}

          {/*Tour details starts*/}
          <div className="tour_detail_container">
            <div className="tour_details">
              <h4>Tour details</h4>
            </div>

            <div className="tour_details_group">

              <div className="duration_group">
                <div className="duration_icon">
                  <img
                    className="btn_img"
                    src={
                      process.env.PUBLIC_URL +
                        "/img/Icons/tour_detail_clock.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="duration_txt">
                  <p className="duration">Duration</p>
                  <p>{this.props.data.duration} hours</p>
                </div>
              </div>

              <div className="departure_group">
                <div className="departure_icon">
                  <img
                    className="btn_img"
                    src={
                      process.env.PUBLIC_URL + "/img/Icons/tour_detail_bus.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="departure_txt">
                  <p className="departue">Departures</p>
                  <p>{this.props.data.departures}</p>
                </div>
              </div>

            </div>

            <div className="info_details">
              <h4>Additional information</h4>
              <p className="details_txt">
                {this.props.data.additionalinfo}
              </p>
            </div>
            {/*Tour Supplier starts*/}
            <div>
              <h4 className="single_tour_txt_title">
                {this.props.data.supplier}
              </h4>
              <img
                className="btn_img"
                src={process.env.PUBLIC_URL + "/img/Logos/re_logo.png"}
                alt=""
              />
            </div>
            {/*Tour Supplier finish*/}
          </div>
          {/*Tour details finish*/}
        </div>
      </div>
    );
  }
}
