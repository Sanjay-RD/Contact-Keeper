import React from "react";
import PropTypes from "prop-types";

const ContactItems = ({ contact }) => {
  const { name, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open" aria-hidden="true"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItems.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItems;
