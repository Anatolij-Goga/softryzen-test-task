import { useState, useEffect } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IconContext } from "react-icons";
import Slider from "./Slider/Slider";
import css from "./Cases.module.css";

export default function Cases() {
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

  const [slideNum, setSlideNum] = useState(1);
  const [nextSlide, setNextSlide] = useState(2);

  const handleBackClick = () => {
    setSlideNum(slideNum - 1);
    setNextSlide(nextSlide - 1);
    if (slideNum <= 1) {
      setSlideNum(5);
    }
    if (nextSlide <= 1) {
      setNextSlide(5);
    }
  };

  const handleForwardClick = () => {
    setSlideNum(slideNum + 1);
    setNextSlide(nextSlide + 1);
    if (slideNum >= 5) {
      setSlideNum(1);
    }
    if (nextSlide >= 5) {
      setNextSlide(1);
    }
  };

  return (
    <section className={css.cases_section} id="cases">
      <div className={css.cases_controlsBlock}>
        <h2 className={css.cases_title}>Successful cases of our company</h2>
        <div className={css.cases_counter}>
          <span className={css.cases_count}>{`0${slideNum}`}</span>
          <span className={css.cases_count}>/05</span>
        </div>
        <div className={css.cases_controls}>
          <button className={css.cases_button} onClick={handleBackClick}>
            <IconContext.Provider value={{ color: "#173D33", size: "36px" }}>
              <GoArrowLeft />
            </IconContext.Provider>
          </button>
          <button className={css.cases_button} onClick={handleForwardClick}>
            <IconContext.Provider value={{ color: "#173D33", size: "36px" }}>
              <GoArrowRight />
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <ul className={css.cases_gallery}>
        <li>
          <Slider currentSlide={slideNum} />
        </li>
        {windowWidth > 768 && (
          <li>
            <Slider currentSlide={nextSlide} />
          </li>
        )}
      </ul>
    </section>
  );
}
