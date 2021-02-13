import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "../../utils/mediaQueries";
import adminContext from "../../contexts/adminContext";
import Sidebar from "../sidebar/Sidebar";

import navStyles from "./Navbar.module.css";
import sidebarStyles from "../sidebar/Sidebar.module.css";

import { Link } from "react-router-dom";
import { GiImperialCrown } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = ({ className, menuIcon, roleContainer }) => {
  let isPageWide = useMediaQuery("(max-width: 894px)");

  const { admin, setAdmin } = useContext(adminContext);
  let history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("admin");
    setAdmin(false);
    history.push("/");
  };

  const [open, setOpen] = useState(false);

  const displaySideNav = () => {
    setOpen(true);
  };

  const closeSideNav = (e) => {
    setOpen(false);
  };

  return (
    <>
      <div className={`${navStyles.Navbar} ${className}`}>
        {!isPageWide && (
          <nav onClick={closeSideNav}>
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
        )}
        {isPageWide && (
          <CgMenuGridO
            size='3rem'
            className={`${navStyles.menuIcon} ${menuIcon}`}
            onClick={displaySideNav}
          />
        )}
      </div>
      {admin && (
        <div className={`${navStyles.roleContainer} ${roleContainer}`}>
          <p className={navStyles.role}>
            {" "}
            <GiImperialCrown size='1.6rem' /> Administrateur
          </p>
          <span className={navStyles.deconnect} onClick={handleLogOut}>
            (Se déconnecter)
          </span>
        </div>
      )}
      {isPageWide && (
        <Sidebar
          onClose={closeSideNav}
          className={open ? sidebarStyles.Sidebar : sidebarStyles.closed}
        />
      )}
    </>
  );
};

export default Navbar;
