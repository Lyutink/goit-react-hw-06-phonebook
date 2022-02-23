import React from "react";
import { useState, useEffect } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { nanoid } from "nanoid";
//////////////////////test


import { addNewContact, deleteContact } from "../redux/contacts/contactsSlice";
//////////////////////////

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import { TitleForm } from "components/ContactForm/ContactForm.styled";
import { TitleContacts } from "components/Contact/Contact.styled";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
////////////////////////////
export default function App() {
  //const [contacts, setContacts] = useState(initialContacts);
  const contacts = useSelector(state => state.contacts);
  console.log("contacts", contacts);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   const userContacts = JSON.parse(localStorage.getItem("contacts"));
  //   // return userContacts ? userContacts : initialContacts;
  //   return userContacts ?? initialContacts;
  // });
  const [filter, setFilter] = useState("");

  const checkContact = (name) => {
    const normilizedName = name.toLowerCase();
    return contacts.find(
      (contact) => normilizedName === contact.name.toLowerCase()
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (checkContact(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addNewContact(contact));
      //setContacts((prevContacts) => [contact, ...prevContacts]);
    }
  };

   const getContactList = () => {
     const normilizedFilter = filter.toLocaleLowerCase();
     return contacts.filter((contact) =>
       contact.name.toLocaleLowerCase().includes(normilizedFilter)
     
     );
   };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const onDeleteContact = (idContact) => {
    dispatch(deleteContact(idContact));
    console.log("idContact", idContact);
    // setContacts((contacts) =>
    //   contacts.filter((contact) => contact.id !== idContact)
    // );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //////////////////////////test

 // const value = useSelector(state => state.myValue);
  ///////////////////////////////
  return (
    <>
      {/* <div>test 
        {value}
        <button onClick={() => dispatch(increment(100))}>inc</button>
        <button onClick={()=> dispatch(decrement(50))}>Dec</button>
      </div> */}


      <TitleForm>Phonebook</TitleForm>
      <ContactForm onSubmit={formSubmitHandler} />

      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        getContactList={getContactList()}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </>
  );
}
