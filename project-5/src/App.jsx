import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ContactCart from "./components/ContactCart";
import Model from "./components/Model";

import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (e) {
        console.log(e);
      }
    };
    getContacts();
  }, []);
  return (
    <>
      <div className="h-lvh bg-gray-900">
        <Navbar></Navbar>
        <SearchBar handleOnAddBtn={onOpen}></SearchBar>
        {contacts.map((contact) => (
          <ContactCart key={contact.id} contact={contact}></ContactCart>
        ))}
      </div>
      <Model isOpen={isOpen} onClose={onClose}>
        HI
      </Model>
    </>
  );
};

export default App;
