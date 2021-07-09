import "./styles.css";
import { MdArrowDownward } from "react-icons/md";
export const WelcomePage = ({ setWelcomePage }) => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page__title">triwizard tournament</h1>
      <div className="btnninfo">
        <button
          className="welcome-page__btn"
          onClick={() => setWelcomePage(true)}
        >
          start
        </button>
        <span className="info">
          <MdArrowDownward />
        </span>
      </div>
    </div>
  );
};
