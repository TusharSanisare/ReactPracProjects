import { FaUserEdit } from "react-icons/fa";
import { PiUserCircleThin } from "react-icons/pi";
import { IoMdTrash } from "react-icons/io";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import AddUpdateContact from "./AddUpdateContact";

const ContactCart = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex relative items-center w-96 m-auto py-3 mt-3 rounded-md bg-orange-300">
        <PiUserCircleThin className="text-5xl mx-2 items-start text-orange-600" />
        <div className="w-1/2">
          <h1 className="text-xl font-semibold">{contact.name}</h1>
          <p className="text-sm">{contact.email}</p>
        </div>
        <div className="absolute right-0 flex mx-2 gap-2 items-center">
          <FaUserEdit className="text-3xl text-blue-700" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-3xl text-red-600"
          />
        </div>
      </div>
      <AddUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCart;
