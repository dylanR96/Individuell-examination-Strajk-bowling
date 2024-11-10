import React from "react";
import Menu from "../../components/Menu";
import "./confirmation.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";

const Confirmation: React.FC = ({ responseData }) => {
  const [when, lanes, shoes, price, id] = responseData;
  return (
    <div className="main-confirmation">
      <nav className="confirmation-nav">
        <Menu />
      </nav>
      <div className="confirmation-content">
        <div>
          <BowlingIconSmall />
          <h1 className="confirmation-header">SEE YOU SOON!</h1>
        </div>
        <div>
          <div className="confirmation-form-header">
            <div className="confirmation-form-dividers"></div>
            <h2>BOOKING DETAILS</h2>
            <div className="confirmation-form-dividers"></div>
          </div>
          <form>
            <fieldset className="form-group">
              <legend>WHEN</legend>
              <span></span>
            </fieldset>

            <fieldset className="form-group">
              <legend>WHO</legend>
              <span></span>
            </fieldset>
            <fieldset className="form-group">
              <legend>LANES</legend>
              <span></span>
            </fieldset>
            <fieldset className="form-group">
              <legend>BOOKING NUMBER</legend>
              <span></span>
            </fieldset>
            <fieldset className="form-group">
              <span>total</span>
              <span></span>
            </fieldset>

            <div>
              <button type="submit">SWEET, LETS GO!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
