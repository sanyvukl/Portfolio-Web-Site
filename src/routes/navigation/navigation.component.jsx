import React, { Fragment } from "react"
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import LinksContainer from "./nav-links-container/nav-links-container.component";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
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
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;