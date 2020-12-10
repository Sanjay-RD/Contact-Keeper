import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <React.Fragment>
      {contacts.map((contact) => (
        <h1>{contact.name}</h1>
      ))}
    </React.Fragment>
  );
};

export default Contacts;
