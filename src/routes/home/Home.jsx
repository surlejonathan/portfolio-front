import React, { useContext } from "react";
import darkModeContext from "../../contexts/darkModeContext";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Navbar from "../../components/navbar/Navbar";
import themeLight from "../../images/ink.mp4";
import image from "../../images/imgDark5-b.jpg";
import { SiGithub, SiLinkedin } from "react-icons/si";

import homeStyles from "../home/Home.module.css";

export default function Home() {
  const { dark } = useContext(darkModeContext);

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
            <div className={homeStyles.socialMedia}>
              <a
                href='https://github.com/surlejonathan'
                target='_blank'
                rel='noreferrer'
              >
                <SiGithub
                  size='2rem'
                  className={`${homeStyles.social} ${homeStyles.gitHub}`}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/jonathan-surle/'
                target='_blank'
                rel='noreferrer'
              >
                <SiLinkedin
                  size='2rem'
                  className={`${homeStyles.social} ${homeStyles.linkedIn}`}
                />
              </a>
            </div>
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
          {!dark && (
            <video className={homeStyles.video} autoPlay loop muted>
              <source src={themeLight} type='video/mp4' />
            </video>
          )}

          {dark && <img src={image} />}
        </div>
      </div>
    </div>
  );
}
