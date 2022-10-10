import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactSlice";


const ContactList = (props) => {
  const dispatch =  useDispatch();
  const contacts = useSelector(state => state.contacts);

   useEffect(() => {
    dispatch(fetchContacts());
    
  }, [])

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };



  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
