import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MetaTags from "react-meta-tags";
import cardStyles from "../admin/Dashboard.module.css";
import formStyles from "../admin/Admin.module.css";
import { FcCheckmark } from "react-icons/fc";

export default function Dashboard() {
  let history = useHistory();
  const [imageSelected, setImageSelected] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectPicture, setProjectPicture] = useState("");
  const [projectPresentation, setProjectPresentation] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectTechno, setProjectTechno] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    axios
      .post("https://api.cloudinary.com/v1_1/dgxpwfgsr/image/upload", formData)
      .then((response) => response.data.url)
      .then((data) => setProjectPicture(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      projectName !== "" ||
      projectPicture !== "" ||
      projectPresentation !== ""
    ) {
      axios
        .post(`${process.env.REACT_APP_URL}/api/project`, {
          project_name: projectName,
          project_picture: projectPicture,
          project_presentation: projectPresentation,
          project_url: projectUrl,
          project_techno: projectTechno,
          project_date: projectDate,
        })
        .then((response) => console.log(response.data))
        .then(() => history.push("/projects"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <MetaTags>
        <title>Dashboard</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <Navbar />
      <Header />
      <h1>Dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className={`${formStyles.formLogin} ${cardStyles.card}`}
      >
        <div className='form-group'>
          <label htmlFor='projectName'>Nom du projet</label>
          <input
            className={formStyles.input}
            type='text'
            name='project_name'
            id='projectName'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='projectDate'>Date</label>
          <input
            className={formStyles.input}
            type='date'
            name='project_date'
            id='projectDate'
            value={projectDate}
            onChange={(e) => setProjectDate(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='projectTechno'>Techno</label>
          <input
            className={formStyles.input}
            type='text'
            name='project_techno'
            id='projectTechno'
            value={projectTechno}
            onChange={(e) => setProjectTechno(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Image</label>
          <label htmlFor='imageUpload' className={formStyles.fileUploadLabel}>
            {imageSelected !== ""
              ? imageSelected.name
              : "Sélectionner une image ici"}
            <input
              id='imageUpload'
              name='project_picture'
              type='file'
              className='fileUploadInput'
              data-cloudinary-field='image_id'
              data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':400,'height':300}}"
              onChange={(e) => setImageSelected(e.target.files[0])}
            />{" "}
            {projectPicture !== "" && <FcCheckmark />}
          </label>

          <button
            type='button'
            className={formStyles.uploadButton}
            onClick={uploadImage}
          >
            Uploader l'image
          </button>
        </div>

        <div className='form-group'>
          <label htmlFor='projectPresentation'>Présentation</label>
          <textarea
            resize='none'
            className={formStyles.input}
            name='project_presentation'
            id='projectPresentation'
            value={projectPresentation}
            onChange={(e) => setProjectPresentation(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='projectUrl'>Lien du projet</label>
          <input
            className={formStyles.input}
            type='text'
            name='project_url'
            id='projectUrl'
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className={formStyles.button}>
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}
