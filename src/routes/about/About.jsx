import React from "react";
import MetaTags from "react-meta-tags";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import aboutStyles from "../about/About.module.css";
import Portrait from "../../images/Jonathan_SURLE.jpg";
import wcs from "../../images/wcs.png";
import oc from "../../images/logo-OC.png";

export default function About() {
  const getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <div className='main'>
      <Navbar />
      <Header />
      <MetaTags>
        <title>A propos</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <h1>A propos de moi</h1>
      <div class={aboutStyles.grid}>
        <div className={aboutStyles.portrait}>
          <img src={Portrait} />
        </div>
        <div className={aboutStyles.card}>
          <div className={aboutStyles.age}>
            <h3>Age :</h3>
            <p>{getAge("1986/02/05")} ans</p>
          </div>

          <div className={aboutStyles.formation}>
            <h3>Formations :</h3>
            <div className={aboutStyles.wcs}>
              <img
                src={wcs}
                alt='logo de la Wild Code School'
                height='40px'
                width='100px'
              />
              <span>du 11/09/2020 au 12/02/2021</span>
              <p>
                <b>Développeur Web</b>
              </p>
              <b>Spécialité React/Node.js</b>
            </div>
            <div className={aboutStyles.oc}>
              <img
                src={oc}
                alt='logo openclassRooms'
                height='25px'
                width='200px'
              />
              <span>depuis 2019</span>
              <b>HTML/CSS/Bootstrap/JS/JQuery</b>
            </div>
          </div>
        </div>
        <div className={aboutStyles.description}>
          <h3>Mes compétences :</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>JWT</li>
            <li>Firebase</li>
            <li>Socket.io</li>
            <li>RestAPI</li>
            <li>Modélisation BDD</li>
            <li>SQL (MySQL - Workbench)</li>
            <li>TDD</li>
            <li>Agile (Scrum)</li>
            <li>Git (Github)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
