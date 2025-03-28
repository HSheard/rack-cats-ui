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
        <div class="login-btn">
                  <Link to="/login">Login</Link>
        </div>

        <Divider />
        <div class="theme-btn">
                  <Theme/>
        </div>
      </div>
      {/* <div className="mobile-menu">
        <Link to="/">
        Home
        </Link>
        <Divider/>
        <Link to="/about">About</Link>
        <Divider/>
        <Link to="/contact">Contact</Link>
      </div> */}
    </nav>
  );
}

export default NavigationBar;
