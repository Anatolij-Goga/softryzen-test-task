import { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import GreenButton from "../Buttons/GreenButton/GreenButton";
import Modal from "./Modal/Modal";
import css from "./Header.module.css";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headerButton = "Get in touch";

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrolltopdata, setscrolltopdata] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("white");
      }
    });
  }, []);

  return (
    <div
      className={css.header_wrapper}
      style={{ backgroundColor: scrolltopdata }}
    >
      <Logo />
      <div className={css.header_buttonBox}>
        <Modal />
        {windowWidth > 768 && <GreenButton nameButton={headerButton} />}
      </div>
    </div>
  );
}
