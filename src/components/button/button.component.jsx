import React from "react";
import "./button.style.scss";

const BUTTONS_TYPE_CLASSES = {
    "google": "google-sign-in",
    "inverted": "inverted"
}
const Button = ({ children, buttonType, ...otherProps }) => {
    return (<button className={`button-container ${BUTTONS_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>);
};

export default Button;