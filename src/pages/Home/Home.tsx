import React from "react";
import "./home.css";
import BowlingIcon from "../../assets/BowlingIcon";
import { Link } from "@tanstack/react-router";

const Home: React.FC = () => {
  return (
    <div className="main-home">
      <div className="home-page-content">
        <Link to="/booking">
          <BowlingIcon />
        </Link>
        <h1 className="home-page__header">STRAJK</h1>
        <h3 className="home-page__second-header">BOWLING</h3>
      </div>
    </div>
  );
};

export default Home;
