import css from "./FAQ.module.css";

export default function FAQfuctional({
  question,
  answer,
  id,
  openedId,
  onFaqClick,
}) {
  const isActive = id === openedId;

  return (
    <>
      <div
        className={css.FAQ_questionBox}
        onClick={() => {
          onFaqClick(id);
        }}
      >
        <div className={css.FAQ_icon}>{isActive ? "-" : "+"}</div>
        <div className={css.FAQ_question}>{question}</div>
      </div>
      {isActive && <div className={css.FAQ_answerText}>{answer}</div>}
    </>
  );
}
