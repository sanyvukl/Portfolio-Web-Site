import React from "react";
import { Outlet, Link } from "react-router-dom";

const LinksContainer = () =>{
    return (
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/busket">
            BUSKET
          </Link>
        </nav>
    );
};

export default LinksContainer;