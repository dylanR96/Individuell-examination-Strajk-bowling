import React from "react";
import Menu from "../../components/Menu";
import "./confirmation.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";
import { useResponseData } from "../../providers/ResponseDataContext";

const Confirmation: React.FC = () => {
  const { responseData } = useResponseData();

  if (!responseData) {
    return <div>No booking data available</div>;
  }
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
              <span>{responseData.when}</span>
            </fieldset>

            <fieldset className="form-group">
              <legend>WHO</legend>
              <span>{responseData.players}</span>
            </fieldset>
            <fieldset className="form-group">
              <legend>LANES</legend>
              <span>{responseData.lanes}</span>
            </fieldset>
            <fieldset className="form-group">
              <legend>BOOKING NUMBER</legend>
              <span>{responseData.id}</span>
            </fieldset>
            <fieldset className="form-group">
              <span>total</span>
              <span>{responseData.price}</span>
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
