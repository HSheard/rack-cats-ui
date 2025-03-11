import Divider from "../Misc/Divider";
import Theme from "../Misc/Theme";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="page-info">
        <div className="logo" alt="Logo"></div>
        <span>Player Categories</span>
      </div>
      <div className="menu">
        <Divider />
        <a className="page-navigate" draggable="false" href="#home">
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
        </a>
        <Divider />
        <Theme />
      </div>
    </nav>
  );
}

export default NavigationBar;
