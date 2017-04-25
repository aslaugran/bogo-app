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
      <li className="categorie_single" onClick={() => this.handleClick()}>
        <img className="categorie_single adventure" src={img} alt="" />
        <h3 className="cat_title">{name}</h3>
      </li>
    )
  }
}
