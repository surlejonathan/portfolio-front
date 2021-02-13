import React, { useState, useContext } from "react";
import sidebarStyles from "./Sidebar.module.css";
import { Link, useHistory } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onClose, className }) => {
  return (
    <div className={className} onClick={onClose}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/about'>A propos</Link>
          </li>
          <li>
            <Link to='/projects'>Projets</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <IoClose
        color='white'
        size='2rem'
        className={sidebarStyles.closeIcon}
        onClick={onClose}
      />
    </div>
  );
};

export default Sidebar;
