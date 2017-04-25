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
    <div className="categories_bg">
      <div className="container">
        <div className="categories_title">
          <h1>Our Day Tour Categories</h1>
          <h2>Experience Iceland with our trusted guidance</h2>
        </div>
        <div className="categories">
          {categories}
        </div>
        <footer class="footer_container">
          <div class="footer_content">
            <a class="company" href="http://bogo.is/">
              powered by bógó <img src="" alt="" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CategoryList;
