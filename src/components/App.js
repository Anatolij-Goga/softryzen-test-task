import css from "./App.module.css";
import Main from "./Main/Main.jsx";
import Values from "./Values/Values.jsx";
import Electricity from "./Electricity/Electricity.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Cases from "./Cases/Cases.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className={css.wrapper}>
      <Header />
      <Main />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
