import React from "react";
import Category from "./Category";

const CategoryList = props => {
  const categories = props.data.map((category, index) => {
    return (
      <Category
        data={category}
        key={index}
        onCategorySelected={id => props.onCategorySelected(id)}
      />
    );
  });

  return (
        <div className="container-fluid">
          <div className="categories_title">
            <h1>Our Day Tour Categories</h1>
            <h2>Experience Iceland with our trusted guidance</h2>
          </div>
          <div class="row">
          <div className="category-holder">
            {categories}
          </div>
          </div>
        </div>
  );
};

export default CategoryList;
