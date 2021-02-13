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
      <div className={aboutStyles.card}>
        <img src={Portrait} />
      </div>
    </div>
  );
}
