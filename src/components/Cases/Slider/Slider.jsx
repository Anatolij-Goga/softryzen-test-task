import CasesArr from "../CasesArr";
import { IconContext } from "react-icons";
import { GoArrowUpRight } from "react-icons/go";
import css from "./Slider.module.css";

export default function Slider(currentSlide) {
  const currentItem = CasesArr.filter(
    (item) => item.id === currentSlide.currentSlide
  );

  return (
    <article>
      {currentItem.map(
        ({ id, imagemob, imageweb, title, description, date }) => (
          <div key={id} className={css.sliderItem}>
            <div className={css.sliderImageBox}>
              <img
                srcSet={`
                        ${imagemob} 480w,
                        ${imagemob} 768w,
                        ${imageweb} 1280w
                    `}
                sizes="(max-width: 480px) 480px,
                                (max-width: 768px) 480px,
                                (max-width: 1280px) 348px
                                (min-width: 1280px) 596px"
                src={`${imagemob}`}
                alt={`Ecosolution case ${id}`}
                className={css.sliderImage}
              />
            </div>
            <div className={css.sliderInfo}>
              <div className={css.sliderHeader}>
                <h6 className={css.sliderTitle}>{title}</h6>
                <button className={css.sliderButton}>
                  <IconContext.Provider
                    value={{ color: "#173D33", size: "28px" }}
                  >
                    <GoArrowUpRight />
                  </IconContext.Provider>
                </button>
              </div>
              <div className={css.sliderText}>
                <p className={css.sliderDescription}>{description}</p>
                <p className={css.sliderDate}>{date}</p>
              </div>
            </div>
          </div>
        )
      )}
    </article>
  );
}
