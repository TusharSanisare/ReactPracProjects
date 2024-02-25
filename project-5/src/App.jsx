import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

import { LuClipboardEdit } from "react-icons/lu";
import { AiFillDelete } from "react-icons/ai";
import { PiUserCircleThin } from "react-icons/pi";

const App = () => {
  const [contacts, setContacts] = useState([]);

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
        <SearchBar></SearchBar>
        <div>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center w-96 m-auto p-3 rounded-md bg-orange-300"
            >
              <PiUserCircleThin className="text-4xl w-1/6 text-orange-600" />
              <div className="w-1/2">{contact.name}</div>
              <LuClipboardEdit className="text-2xl w-1/6" />
              <AiFillDelete className="text-2xl w-1/6" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
