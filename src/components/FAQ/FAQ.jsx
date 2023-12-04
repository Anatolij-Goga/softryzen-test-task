import { useState } from "react";
import GreenButton from "../../components/Buttons/GreenButton/GreenButton";
import FAQfuctional from "./FAQfuctional";
import faqData from "./FAQData";
import css from "./FAQ.module.css";

export default function FAQ() {
  const faqButton = "Contact us";
  const [openedId, setopenedId] = useState(faqData[0].id || null);

  const onFaqClick = (value) => {
    if (openedId === value) {
      setopenedId(null);
    } else {
      setopenedId(value);
    }
  };

  return (
    <section className={css.FAQ_section} id="faq">
      <h2 className={css.FAQ_title}>Frequently Asked Questions</h2>
      <ul className={css.FAQ_list}>
        {faqData.map(({ question, answer, id }) => (
          <li className={css.FAQ_item} key={id}>
            <FAQfuctional
              id={id}
              question={question}
              answer={answer}
              openedId={openedId}
              onFaqClick={onFaqClick}
            />
          </li>
        ))}
      </ul>
      <div className={css.FAQ_contactBlock}>
        <p className={css.FAQ_noAnswerText}>
          Didn't find the answer to your question?{" "}
        </p>
        <GreenButton nameButton={faqButton} />
      </div>
    </section>
  );
}
