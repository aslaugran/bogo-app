import React, { Component } from "react";
// import logo from './logo.svg';
import "../dist/style.css";
import SearchForm from "./Components/SearchForm";
import CategoryList from "./Components/CategoryList";
import TourList from "./Components/TourList";
import TourDetails from "./Components/TourDetails";

import categories from "./json/categories.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: null,
      selectedTour: null
    };
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
    this.handleTourSelected = this.handleTourSelected.bind(this);
  }

  componentDidMount() {
    // axios.get('http://www.extranet.bogo.is/api/tours/58fcc108ecc2cc0282ccad6e')
    //   .then(response => {
    //     this.setState({
    //       tours: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data', error);
    //   });
    this.setState({
      categories: categories.data
    });
  }
  handleCategorySelected(id) {
    console.log("handleCategorySelected", id);
    this.setState({
      selectedCategory: id
    });
  }
  handleTourSelected(data) {
    console.log("in app.js og  - handleTourSelected", data);
    this.setState({
      selectedCategory: false
    });
    this.setState({
      selectedTour: data
    });
  }

  render() {
    const { categories, selectedCategory, selectedTour } = this.state;

    let categoryList;
    let tourList;
    let tours;

    if (selectedCategory) {
      tourList = (
        <TourList
          categoryId={selectedCategory}
          onTourSelected={this.handleTourSelected}
        />
      );
    } else if (selectedTour) {
      tours = <TourDetails data={selectedTour} />;
    } else {
      categoryList = (
        <CategoryList
          data={categories}
          onCategorySelected={id => this.handleCategorySelected(id)}
        />
      );
    }

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Whatever Titill</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          {categoryList}
          {tourList}
          {tours}
        </div>
      </div>
    );
  }
}
