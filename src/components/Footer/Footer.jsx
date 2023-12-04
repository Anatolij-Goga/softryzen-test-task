import Logo from "../Header/Logo/Logo";
import { IconContext } from "react-icons";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import css from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={css.footer_section}>
      <div className={css.footer_linksBox}>
        <Logo className={css.footer_logo} />
        <button className={css.arrowBtn} onClick={scrollToTop}>
          <IconContext.Provider value={{ color: "#173D33", size: "16px" }}>
            <IoIosArrowRoundUp />
          </IconContext.Provider>
        </button>
        <div className={css.footer_socials}>
          <IconContext.Provider
            value={{
              color: "#173D33",
              size: "24px",
              className: `${css.social_icon}`,
            }}
          >
            <IoLogoFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#173D33",
              size: "24px",
              className: `${css.social_icon}`,
            }}
          >
            <IoLogoInstagram />
          </IconContext.Provider>
        </div>
      </div>
      <div className={css.footer_contactsInfo}>
        <address className={css.footer_contacts}>
          <p className={css.footer_adress}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <p className={css.footer_mail}>office@ecosolution.com</p>
        </address>
        <p className={css.footer_copyright}>ecosolution © 2023</p>
      </div>
    </footer>
  );
}
