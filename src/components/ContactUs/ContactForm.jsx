import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { IconContext } from "react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import { object, string } from "yup";
import css from "./ContactUs.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (validated) {
      if (Object.values(formErrors).length) {
        Notify.failure("Form inputs are incorrect");
      } else {
        Notify.success("You've succsessfully sent your information");
        clearFields();
      }
      setValidated(false);
    }
  }, [validated, formErrors]);

  const formSchema = object({
    name: string().required("Name is required"),
    email: string().email("Email not valid").required("Email is required"),
    phone: string()
      .matches(/^380\d{9}$/, "Phone is not valid")
      .required("Phone is required"),
  });

  const onNameChange = (value) => {
    setName(value);
  };

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onPhoneChange = (value) => {
    setPhone(value);
  };

  const onMessageChange = (value) => {
    setMessage(value);
  };

  const initialVal = {
    name,
    email,
    phone,
    message,
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const validate = async (values) => {
    const errors = {};
    try {
      await formSchema.validate(values, { abortEarly: false });

      return errors;
    } catch (err) {
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });

      return errors;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await validate(initialVal);
    setFormErrors(errors);
    setValidated(true);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.ContactForm}>
        <label className={css.ContactForm_label}>
          * Full name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Rosie"
            onChange={(e) => onNameChange(e.target.value)}
            className={css.ContactForm_input}
            value={name}
          />
          {formErrors.name && (
            <p className={css.ContactForm_error}>{formErrors.name}</p>
          )}
        </label>
        <label className={css.ContactForm_label}>
          * Email:
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johnrosie@gmail.com"
            onChange={(e) => onEmailChange(e.target.value)}
            className={css.ContactForm_input}
            value={email}
          />
          {formErrors.email && (
            <p className={css.ContactForm_error}>{formErrors.email}</p>
          )}
        </label>
        <label className={css.ContactForm_label}>
          * Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="380961234567"
            onChange={(e) => onPhoneChange(e.target.value)}
            className={css.ContactForm_input}
            value={phone}
          />
          {formErrors.phone && (
            <p className={css.ContactForm_error}>{formErrors.phone}</p>
          )}
        </label>
        <label className={css.ContactForm_label}>
          {" "}
          Message:
          <textarea
            name="message"
            rows="8"
            cols="30"
            placeholder="Your message"
            onChange={(e) => onMessageChange(e.target.value)}
            className={css.ContactForm_input}
            value={message}
          />
        </label>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className={css.ContactForm_btn}
        >
          Send
          <div className={css.contactElement}>
            <IconContext.Provider value={{ color: "#173D33", size: "16px" }}>
              <IoIosArrowRoundForward />
            </IconContext.Provider>
          </div>
        </button>
      </form>
    </>
  );
}
