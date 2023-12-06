import React from "react";
import { Link } from "react-router-dom";
import { BasicButton } from "./Common/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Auth Token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h4>NEWS-APP</h4>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/technology">
                Technology
              </Link>
            </li>
          </ul>
          <BasicButton
            className="d-flex"
            title="Log Out"
            handleAction={handleLogout}
          ></BasicButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
