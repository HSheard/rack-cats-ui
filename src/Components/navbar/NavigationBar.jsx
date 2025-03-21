import Divider from "../Misc/Divider";
import Theme from "../Misc/Theme";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="page-info">
        <div className="logo" alt="Logo"></div>
        <span>Player Categories</span>
      </div>
      <div className="menu">
        <Link to="/">
        Home
        </Link>
        <Divider/>
        <Link to="/about">About</Link>
        <Divider/>
        <Link to="/contact">Contact</Link>
        <Divider/>
        <Link to="/login">Login</Link>
        {/* <a className="page-navigate" draggable="false" href="#home">
          Home
          </a>
        <Divider />
        <a className="page-navigate" draggable="false" href="#about">
          About
        </a>
        <Divider />
        <a className="page-navigate" draggable="false" href="#Login">
          Login
        </a>
        <Divider />
        <a className="page-navigate" draggable="false" href="#contact">
          Contact
        </a> */}
        <Divider />
        <Theme />
      </div>
    </nav>
  );
}

export default NavigationBar;
