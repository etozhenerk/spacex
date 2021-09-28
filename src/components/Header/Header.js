import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./header.css";

export const Header = ({ rockets, changeRocket }) => (
  <header className="header">
    <Link to="/">
      <img src={logo} alt="Logo Space X" className="logo" />
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
        {rockets.map((rocket, i) => (
          <li key={i} className="item">
            <Link
              to="/rocket"
              className="item-link"
              onClick={() => {
                changeRocket(rocket);
              }}
            >
              {rocket}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/" className="item-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/calendar" className="item-link" activeClassName="active">
            Calendar
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
