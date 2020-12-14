import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  return (
    <React.Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItems contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItems contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </React.Fragment>
  );
};

export default Contacts;
