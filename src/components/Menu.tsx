import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "./menu.css";
import MenuIcon from "../assets/MenuIcon";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div onClick={toggleMenu}>
        <MenuIcon />
      </div>
      <div
        className={isOpen ? "menu-overlay open" : "menu-overlay"}
        onClick={toggleMenu}
      >
        <ul className="menu-items">
          <li>
            <Link to="/booking">BOOKING</Link>
          </li>
          <li>
            <Link to="/confirmation">CONFIRMATION</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
