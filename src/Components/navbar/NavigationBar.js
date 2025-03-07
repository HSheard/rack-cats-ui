import './NavigationBar.css'
import rackLogo from './rack-logo.png'
function NavigationBar(){
    return(
        <nav class="navbar">
        <div class="logo">
            <img src={rackLogo} alt="Logo"/>
            <span>Rack Cafe Player Categories</span>
        </div>
        <div class="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#Login">Login</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
    )
}

export default NavigationBar;