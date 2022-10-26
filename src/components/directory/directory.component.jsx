import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = (props) => {
    const {categories} = props;
    return (
        <div className="directory-container">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
        </div>
    );
};

export default Directory;
