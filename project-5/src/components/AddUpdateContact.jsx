import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Model from "./Model";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid Email").required("email is required"),
});

const AddUpdateContact = ({ isOpen, onClose, isupdate, preContact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfuly");
    } catch (e) {
      console.log(e);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfuly");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isupdate
              ? { name: preContact.name, email: preContact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) => {
            console.log(values);
            isupdate
              ? updateContact(values, preContact.id)
              : addContact(values);
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
              <div className="text-red-500 text-sm">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="m-1">
              <p>Email</p>
              <Field
                className="p-2 w-[250px] h-[30px] rounded-md border outline-none border-black"
                type="text"
                name="email"
                id="emailInput"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 font-semibold p-2 m-2 rounded-md"
            >
              {isupdate ? "Update" : "Add Contact"}
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddUpdateContact;
