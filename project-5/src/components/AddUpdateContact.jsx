import { addDoc, collection } from "firebase/firestore";
import Model from "./Model";
import { Formik, Form, Field } from "formik";
import { db } from "../config/firebase";

const AddUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form>
            <div className="m-1">
              <p>Name</p>
              <Field
                className="p-2 w-[250px] h-[30px] rounded-md border outline-none border-black"
                type="text"
                name="name"
                id="nameInput"
              />
            </div>
            <div className="m-1">
              <p>Email</p>
              <Field
                className="p-2 w-[250px] h-[30px] rounded-md border outline-none border-black"
                type="text"
                name="email"
                id="emailInput"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 font-semibold p-2 m-2 rounded-md"
            >
              Add Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddUpdateContact;
