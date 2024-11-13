import React from "react";
import Menu from "../../components/Menu";
import "./confirmation.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";
import { useResponseData } from "../../providers/ResponseDataContext";
import { useNavigate } from "@tanstack/react-router";

const Confirmation: React.FC = () => {
  const { setResponseData } = useResponseData();
  const navigate = useNavigate();
  const { responseData } = useResponseData();
  const handleNavigate = (event: React.FormEvent) => {
    event.preventDefault();
    setResponseData(null);
    navigate({ to: "/" });
  };

  return (
    <div>
      <nav className="booking-nav">
        <Menu />
      </nav>
      <div className="main-confirmation">
        <div className="confirmation-content">
          <div className="confirmation-header-container">
            <BowlingIconSmall />
            <h1 className="confirmation-header">SEE YOU SOON!</h1>
          </div>
          <div>
            <div className="confirmation-form-header">
              <div className="confirmation-form-dividers"></div>
              <h2>BOOKING DETAILS</h2>
              <div className="confirmation-form-dividers"></div>
            </div>
            {!responseData ? (
              <div className="confirmation-without-data">
                <p>No booking data available</p>
              </div>
            ) : (
              <form onSubmit={handleNavigate}>
                <div>
                  <fieldset className="form-group-confirmation">
                    <legend>WHEN</legend>
                    <span>{responseData.when}</span>
                  </fieldset>

                  <fieldset className="form-group-confirmation">
                    <legend>WHO</legend>
                    <span>{responseData.players}</span>
                  </fieldset>
                  <fieldset className="form-group-confirmation">
                    <legend>LANES</legend>
                    <span>{responseData.lanes}</span>
                  </fieldset>
                  <fieldset className="form-group-confirmation">
                    <legend>BOOKING NUMBER</legend>
                    <span>{responseData.id}</span>
                  </fieldset>
                </div>
                <fieldset className="form-group-confirmation-price">
                  <span>total</span>
                  <span>{`${responseData.price}sek`}</span>
                </fieldset>

                <div>
                  <button type="submit">SWEET, LETS GO!</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
