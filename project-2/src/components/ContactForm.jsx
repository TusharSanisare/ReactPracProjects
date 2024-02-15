import style from "./ContactForm.module.css";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({ name: "", email: "", about: "" });
  let name, email, about;
  const onSubmit = (event) => {
    event.preventDefault();
    name = event.target[1].value;
    email = event.target[2].value;
    about = event.target[3].value;
    const user = {
      name: name,
      email: email,
      about: about,
    };
    setUser(user);
    console.log(user.name, user.email, user.about);
  };
  return (
    <>
      <section className={style.container}>
        <div className={style.left}>
          <div className={style.btn_div}>
            <Button text="Via Message" icon={<AiFillMessage />} />
            <Button text="Via Call" icon={<IoCall />} />
          </div>
          <form onSubmit={onSubmit} className={style.form}>
            <Button outline={true} text="Via Email Form" icon={<MdEmail />} />
            <input
              placeholder="Enter Name"
              type="text"
              id="name"
              name="name"
              required
            />
            <input
              placeholder="Enter Email"
              type="text"
              id="email"
              name="email"
              required
            />
            <textarea
              placeholder="About Us"
              type="text"
              id="about"
              name="about"
              rows={8}
              required
            />
            <Button text="Submit" />
          </form>
        </div>
        <img className={style.right} src="./images/mainImg.svg" alt="" />
      </section>
      <div
        className={style.user}
      >{`name = ${user.name}, email = ${user.email}, about = ${user.about},`}</div>
    </>
  );
};

export default ContactForm;
