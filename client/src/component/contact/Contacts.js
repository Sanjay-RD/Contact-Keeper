import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts !== null && !loading && contacts.length === 0) {
    return <h4>Please Add Contact</h4>;
  }
  return (
    <React.Fragment>
      {!loading && contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItems contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItems contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default Contacts;
