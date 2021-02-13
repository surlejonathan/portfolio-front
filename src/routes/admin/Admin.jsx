import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import adminContext from "../../contexts/adminContext";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MetaTags from "react-meta-tags";
import formStyles from "./Admin.module.css";

export default function Admin() {
  const [nameAdmin, setNameAdmin] = useState("");
  const [password, setPassword] = useState("");
  const { setAdmin } = useContext(adminContext);

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_URL}/api/admin/login`, {
        name_admin: nameAdmin,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("admin", "true");
          setAdmin(true);
          history.push("/admin/dashboard");
        }
      })
      .catch((err) => {
        if (err) {
          history.push("/");
        }
      });

    setNameAdmin("");
    setPassword("");
  };

  return (
    <div className='main'>
      <MetaTags>
        <title>Admin</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
      </MetaTags>
      <Navbar />
      <Header />
      <h1>Accès Administrateur</h1>
      <form className={formStyles.formLogin} onSubmit={handleSubmit}>
        <input
          type='text'
          name='name_admin'
          value={nameAdmin}
          onChange={(e) => setNameAdmin(e.target.value)}
          required
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>M'authentifier</button>
      </form>
    </div>
  );
}
