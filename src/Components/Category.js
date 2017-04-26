import React, { Component } from 'react';

export default class Category extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { id } = this.props.data;
    this.props.onCategorySelected(id)
  }
  render() {
    const { img, name } = this.props.data;

    return (
      <div className="categorie_single  col-md-4 col-sm-4" onClick={() => this.handleClick()}>
        <img className="categorie_single adventure" src={img} alt="" />
        <h3 className="cat_title">{name}</h3>
      </div>
    )
  }
}
