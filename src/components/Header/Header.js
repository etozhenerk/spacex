import React from "react";
import logo from "../../logo.svg";
import "./header.css";

export const Header = ({ rockets, changeRocket }) => (
  <header className="header">
    <img src={logo} alt="Logo Space X" className="logo" />
    <nav className="main-nav nav">
      <ul className="list">
        {rockets.map((rocket, i) => (
          <li key={i} className="item">
            <a
              href="/"
              className="item-link"
              onClick={(e) => {
                e.preventDefault();
                changeRocket(rocket);
              }}
            >
              {rocket}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">
            Home
          </a>
        </li>
        <li className="item">
          <a href="calendar.html" className="item-link">
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
