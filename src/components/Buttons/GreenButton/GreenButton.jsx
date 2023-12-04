import { Link } from "react-scroll";
import css from "./GreenButton.module.css";

export default function GreenButton({ nameButton }) {
  return (
    <button className={css.contactButton}>
      <Link to="contact" spy={true} smooth={true} className={css.contactLink}>
        {nameButton}
      </Link>
    </button>
  );
}
