import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "sanjay",
        email: "rishidevsanjay9@gmail.com",
        phone: "222-222-222",
        type: "personal",
      },
      {
        id: 2,
        name: "sijan",
        email: "sijan@gmail.com",
        phone: "888-888-888",
        type: "professional",
      },
      {
        id: 3,
        name: "bibek",
        email: "bibek@gmail.com",
        phone: "33-33-33",
        type: "personal",
      },
      {
        id: 4,
        name: "Ram",
        email: "ram@gmail.com",
        phone: "999-999-999",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // set Current Contact

  // clear current contact

  // update Contact

  // Filter Contacts

  // clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
