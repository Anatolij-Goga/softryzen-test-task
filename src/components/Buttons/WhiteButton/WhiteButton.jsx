import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import css from "./WhiteButton.module.css";

export default function WhiteButton({ nameButton, relink }) {
  return (
    <>
      <Link to={relink} spy={true} smooth={true}>
        <button className={css.contactButton}>
          {nameButton}
          <div className={css.contactElement}>
            <IconContext.Provider value={{ color: "#173D33", size: "16px" }}>
              <IoIosArrowRoundForward />
            </IconContext.Provider>
          </div>
        </button>
      </Link>
    </>
  );
}
