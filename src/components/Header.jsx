import { useContext } from 'react';
import { Link } from "react-router-dom";
import { theme } from "../context/ThemeContext";

const Header = () => {

    const {toggleItem,isDarkModeEnabled} = useContext(theme);
  return (
    <>
      <nav className={` navbar navbar-expand-lg navbar-light bg-light ${isDarkModeEnabled?'bg-dark':'bg-white'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${isDarkModeEnabled?'text-white':'text-dark'}`} href="/">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to={`/`} className={`nav-link ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                  Home
                </Link>

              </li>
              <li className="nav-item">
                <Link to={`popular`} className={`nav-link ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`toprated`} className={`nav-link ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                  Toprated
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`upcoming`} className={`nav-link ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                  Upcoming
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#link" onClick={toggleItem} className={`nav-link ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                <i className="fa fa-moon mx-2" />
                  Dark Mode
                </Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
