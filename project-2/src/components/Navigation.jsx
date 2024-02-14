import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={style.nav}>
        <img className={style.navImg} src="/images/logo.png" alt="" />
        <ul className={style.navList}>
          <li>
            <a className={style.navLink} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={style.navLink} href="#">
              About
            </a>
          </li>
          <li>
            <a className={style.navLink} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
