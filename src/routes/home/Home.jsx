import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Navbar from "../../components/navbar/Navbar";
import themeLight from "../../images/ink.mp4";
import image from "../../images/imgDark5-b.jpg";
import homeStyles from "../home/Home.module.css";

export default function Home() {
  let theme = localStorage.getItem("theme");

  useState(() => {
    return theme;
  });
  return (
    <div className='main'>
      <MetaTags>
        <title>Accueil</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <Navbar
        className={homeStyles.Navbar}
        menuIcon={homeStyles.menuIcon}
        roleContainer={homeStyles.roleContainer}
      />
      <div className={homeStyles.Home}>
        <div className={homeStyles.left}>
          <header>
            <h1 className={homeStyles.title}>
              <span>Jonathan</span> Surle
            </h1>
            <p className={homeStyles.description}>
              Développeur Web Fullstack JS
            </p>
          </header>
          <div className={homeStyles.buttonContainer}>
            <Link to='/about'>
              <button>A propos de moi</button>
            </Link>
            <Link to='/projects'>
              <button>Mes réalisations</button>
            </Link>
          </div>
        </div>
        <div className={homeStyles.right}>
          {theme === "light" && (
            <video className={homeStyles.video} autoPlay loop muted>
              <source src={themeLight} type='video/mp4' />
            </video>
          )}

          {theme === "dark" && <img src={image} />}
        </div>
      </div>
    </div>
  );
}
