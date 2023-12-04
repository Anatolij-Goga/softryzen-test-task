import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { IconContext } from "react-icons";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import css from "./Modal.module.css";

import "../../../index.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflowhidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflowhidden");
  };

  return (
    <div className={css.modal_Wrapper}>
      <div className={css.menu_Btn} onClick={openModal}>
        <IconContext.Provider value={{ color: "#292D32", size: "16px" }}>
          <IoIosMenu />
        </IconContext.Provider>
      </div>

      {isOpen && (
        <div className={css.modal_backDrop}>
          <div className={css.modal_Overlay}>
            <div>
              <div className={css.close_Box}>
                <span className={css.close_Modal} onClick={closeModal}>
                  <IconContext.Provider
                    value={{
                      color: "#FFFFFF",
                      size: "20px",
                      className: `${css.close_Icon}`,
                    }}
                  >
                    <IoIosClose />
                  </IconContext.Provider>
                  close
                </span>
              </div>
              <Navigation width={500} closeModal={closeModal} />
            </div>
            <div className={css.footer_socials}>
              <IconContext.Provider
                value={{
                  color: "#FFFFFF",
                  size: "24px",
                  className: `${css.social_icon}`,
                }}
              >
                <IoLogoFacebook />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: "#FFFFFF",
                  size: "24px",
                  className: `${css.social_icon}`,
                }}
              >
                <IoLogoInstagram />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
