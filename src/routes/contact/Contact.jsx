import React from "react";
import MetaTags from "react-meta-tags";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import formStyles from "../admin/Admin.module.css";

export default function Contact() {
  return (
    <div className='main'>
      <MetaTags>
        <title>Me contacter</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <Navbar />
      <Header />
      <h1>Me contacter</h1>
      <form
        className={formStyles.formLogin}
        name='contact'
        method='POST'
        data-netlify='true'
      >
        <label htmlFor='name'>Nom : </label>
        <input type='text' id='name' name='name' required />
        <label htmlFor='email'>E-mail : </label>
        <input type='email' id='email' name='email' required />
        <label htmlFor='subject'>Objet : </label>
        <input type='text' id='subject' name='subject' required />
        <label htmlFor='message'>Message : </label>
        <textarea name='message' id='message' />
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  );
}
