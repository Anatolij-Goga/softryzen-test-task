import { useState, useEffect } from "react";
import { ValuesImg1, ValuesImg2 } from "../ImageSets/ValuesImage";
import sprite from "../../assets/sprite3.svg";
import css from "./Values.module.css";

export default function Values() {
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

  return (
    <section className={css.values_section} id="about">
      <div className={css.values_titleBlock}>
        <h2 className={css.values_title}>Main values of our company</h2>
        <p className={css.values_text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <ul className={css.values_list}>
        <li className={css.values_item}>
          <div className={css.values_itemHeader}>
            <svg className={css.values_icon}>
              <use href={sprite + "#maximize-circle"}></use>
            </svg>
            <h3 className={css.values_itemTitle}>Openness</h3>
          </div>
          <p className={css.values_itemText}>
            to the world, people, new ideas and projects
          </p>
        </li>
        <li className={css.values_item}>
          <div className={css.values_itemHeader}>
            <svg className={css.values_icon}>
              <use href={sprite + "#global-edit"} />
            </svg>
            <h3 className={css.values_itemTitle}>Responsibility</h3>
          </div>
          <p className={css.values_itemText}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>
        <li className={css.values_item}>
          <div className={css.values_itemHeader}>
            <svg className={css.values_icon}>
              <use href={sprite + "#cpu-charge"} />
            </svg>
            <h3 className={css.values_itemTitle}>Innovation</h3>
          </div>
          <p className={css.values_itemText}>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li className={css.values_item}>
          <div className={css.values_itemHeader}>
            <svg className={css.values_icon}>
              <use href={sprite + "#ranking"} />
            </svg>
            <h3 className={css.values_itemTitle}>Quality</h3>
          </div>
          <p className={css.values_itemText}>
            {" "}
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
        {windowWidth > 768 && (
          <li className={css.values_item}>
            <ValuesImg1 className={css.values_img} />
          </li>
        )}
        {windowWidth > 768 && (
          <li className={css.values_item}>
            <ValuesImg2 className={css.values_img} />
          </li>
        )}
      </ul>
    </section>
  );
}
