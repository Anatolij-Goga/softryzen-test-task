import { useState, useEffect } from "react";
import WhiteButton from "../../components/Buttons/WhiteButton/WhiteButton";
import Hero from "../ImageSets/HeroImage";
import css from "./Main.module.css";

export default function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mainButton = "LearnMore";
  const relink = "cases";

  return (
    <section className={css.main_section} id="main">
      <div className={css.main_titleBlock}>
        <h1 className={css.main_title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.main_textBlock}>
          <p className={css.main_text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <WhiteButton nameButton={mainButton} relink={relink} />
        </div>
      </div>
      <div className={css.main_contactsInfo}>
        <address className={css.main_contacts}>
          <p className={css.main_adress}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <p className={css.main_mail}>office@ecosolution.com</p>
        </address>
        {windowWidth > 768 && (
          <p className={css.main_copyright}>ecosolution © 2023</p>
        )}
      </div>
      <Hero />
    </section>
  );
}
