import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const Directory = (props) => {
    const { categories } = props;
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
