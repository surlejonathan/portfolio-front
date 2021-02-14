import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MetaTags from "react-meta-tags";
import Loader from "react-loader-spinner";
import projectStyles from "../projects/Projects.module.css";

export default function Projects() {
  let history = useHistory();

  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/project`)
      .then((response) => response.data)
      .then((data) => setProjectList(data))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  const handleDelete = (project) => {
    projectList.map((p) => console.log(p.idproject, project.idproject));
    axios
      .delete(`${process.env.REACT_APP_URL}/api/project/${project.idproject}`)
      .then((response) => console.log(response.data))
      .then(() =>
        setProjectList(
          projectList.filter((p) => project.idproject !== p.idproject)
        )
      )

      .catch((err) => console.error(err));
    return projectList;
  };

  useEffect(() => {
    setLoading(true);
    getProjects();
  }, []);

  return (
    <div className='main'>
      <MetaTags>
        <title>Mes Projets</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <Navbar />
      <Header />
      <h1>Mes Projets</h1>
      <div
        className={projectStyles.grid}
        style={{ paddingTop: loading && "10%" }}
      >
        {loading && (
          <Loader type='TailSpin' color='#72f' height={100} width={100} />
        )}
        {projectList &&
          projectList.map((project, index) => (
            <Card
              key={index}
              path='/projects'
              className={projectStyles.card}
              title={project.project_name}
              imgSrc={project.project_picture}
              description={project.project_presentation}
              onClick={() => handleDelete(project)}
            />
          ))}
      </div>
    </div>
  );
}
