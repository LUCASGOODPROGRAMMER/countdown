import { NavLink } from "react-router-dom";
import Clock from "../assets/clock.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={Clock} alt="Relógio" className="navbar-logo" />
        <span className="navbar-title">COUNTDOWN</span>
      </div>
      <nav className="navbar-menu">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Definir Data
        </NavLink>
        <NavLink to="/countdown" className="nav-item" activeclassname="active">
          Ver Countdown
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
