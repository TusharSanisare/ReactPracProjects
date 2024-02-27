import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ContactCart from "./components/ContactCart";
import AddUpdateContact from "./components/AddUpdateContact";

import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import useDisclouse from "./hooks/useDisclouse";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { onClose, onOpen, isOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (e) {
        console.log(e);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (event) => {
    const value = event.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContact = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContact);
      return filteredContact;
    });
  };
  return (
    <>
      <div className="h-lvh bg-gray-900">
        <Navbar></Navbar>
        <SearchBar
          handleOnAddBtn={onOpen}
          handleOnInput={filterContacts}
        ></SearchBar>
        {contacts.map((contact) => (
          <ContactCart key={contact.id} contact={contact}></ContactCart>
        ))}
        <AddUpdateContact onClose={onClose} isOpen={isOpen} />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
