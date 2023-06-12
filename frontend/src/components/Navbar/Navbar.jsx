import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <a className="nav-links" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-links" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-links" href="#contact">
              Contact Us
            </a>
          </li>
          <li>
            <Link className="nav-links" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <a href="#about">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
