import React from "react";
import Menu from "../../components/Menu";
import "./confirmation.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";

const Confirmation: React.FC = () => {
  return (
    <div>
      <nav>
        <Menu />
      </nav>
      <div>
        <BowlingIconSmall /> <h1>SEE YOU SOON!</h1>
      </div>
      <div>
        <div></div>
        <h2>BOOKING DETAILS</h2>
        <div></div>
        <label>
          WHEN
          <span></span>
        </label>
        <label>
          WHO
          <span></span>
        </label>
        <label>
          LANES
          <span></span>
        </label>
        <label>
          BOOKING NUMBER
          <span></span>
        </label>
      </div>
      <div>
        <div></div>
        <button>SWEET, LETS GO!</button>
      </div>
    </div>
  );
};

export default Confirmation;
