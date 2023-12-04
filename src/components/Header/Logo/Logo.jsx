import { NavLink } from "react-router-dom/dist";
import logo from "../../../assets/images/bgAsset 324 2.png";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logo}>
      <img src={`${logo}`} alt="logo" style={{ width: "31px" }} />
      <p className={css.logo_title}>ecosolution</p>
      <div className={css.logo_subtitle}>
        <span className={css.logo_span}>GREEN</span>
        <span className={css.logo_span}>ERGY</span>
        <span className={css.logo_span}>FOR LIFE</span>
      </div>
    </NavLink>
  );
}
