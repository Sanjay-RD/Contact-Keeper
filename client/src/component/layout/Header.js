import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Header = ({ icon, title }) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <React.Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </React.Fragment>
  );

  const guestLinks = (
    <React.Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
