import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Header.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card-o",
};

export default Header;
