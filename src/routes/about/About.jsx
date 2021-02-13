import React from "react";
import MetaTags from "react-meta-tags";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import aboutStyles from "../about/About.module.css";
import Portrait from "../../images/Jonathan_SURLE.jpg";

export default function About() {
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
        <div style={{ flex: "1" }}>
          <p>Bienvenue sur mon portfolio !</p>
          <p>
            Dans le cadre d'une reconversion professionnelle, j'intègre en
            Septembre 2020, la formidable aventure proposée par la Wild Code
            School afin de découvrir et maîtriser les rudiments du métier de
            développeur.
          </p>
        </div>
      </div>
    </div>
  );
}
