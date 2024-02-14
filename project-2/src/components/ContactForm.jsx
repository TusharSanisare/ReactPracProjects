import style from "./ContactForm.module.css";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section className={style.container}>
      <div className={style.left}>
        <div className={style.btn_div}>
          <Button text="Via Message" icon={<AiFillMessage />} />
          <Button text="Via Call" icon={<IoCall />} />
        </div>
        <Button outline={true} text="Via Email Form" icon={<MdEmail />} />
        <form>
          <input type="text" name="name" required />
        </form>
      </div>
      <img className={style.right} src="./images/mainImg.svg" alt="" />
    </section>
  );
};

export default ContactForm;
