import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FaBars, FaWindowClose, FaHeart, FaUserCog } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
export default function Nav({ num }) {
  const [click, setClick] = useState(false);
  const openOrClose = () => setClick(!click);
  const burgemenuClose = () => setClick(false);
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <Link to="/" className="logo">
            <img src="./assets/holidazeLogo.png" alt="logo of the company" />
          </Link>
          <div className="burger-menu" onClick={openOrClose}>
            <span className="navbar-icons">{click ? <FaWindowClose /> : <FaBars />}</span>
          </div>
          <ul className={click ? "navigation-menu active" : "navigation-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={burgemenuClose}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/accomodations" className="nav-links" onClick={burgemenuClose}>
                Accommodations
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-links" onClick={burgemenuClose}>
                Contact
              </Link>
            </li>

            {auth ? (
              <>
                <li className="nav-item">
                  <Link to="/admin" className="nav-links" onClick={burgemenuClose}>
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-item-login" onClick={burgemenuClose}>
                    <BsFillPersonCheckFill className="loged-in-icon" />
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item-login">
                <Link to="/login" onClick={burgemenuClose}>
                  <FaUserCog className="login-icon" />{" "}
                </Link>
              </li>
            )}
            <li className="nav-item-favorite">
              <Link to="/wishlist" onClick={burgemenuClose}>
                <FaHeart size={27} />
                <span id="number">{num}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
