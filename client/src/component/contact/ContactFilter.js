import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter, filtered } = contactContext;

  const [text, setText] = useState("");

  useEffect(() => {
    if (filtered === null) {
      setText("");
    }
  }, [filtered]);

  const onChange = (e) => {
    setText(e.target.value);
    if (e.target.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Filter Contacts..."
        value={text}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
