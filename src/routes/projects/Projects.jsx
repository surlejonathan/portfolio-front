import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MetaTags from "react-meta-tags";
import Loader from "react-loader-spinner";
import projectStyles from "../projects/Projects.module.css";
import Carousel from "../../components/carousel/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/project`)
      .then((response) => response.data)
      .then((data) => setProjectList(data))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  const handleDelete = (project) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/api/project/${project.idproject}`)
      .then((response) => console.log(response.data))
      .then(() =>
        setProjectList(
          projectList.filter((p) => project.idproject !== p.idproject)
        )
      )
      .then(() => setCurrentProject(0))

      .catch((err) => console.error(err));
    return projectList;
  };

  const handlePrev = () => {
    setCurrentProject(
      currentProject <= 0
        ? currentProject - 1 + projectList.length
        : currentProject - 1
    );
  };

  const handleNext = () => {
    setCurrentProject(
      currentProject < projectList.length - 1 ? currentProject + 1 : 0
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  useEffect(() => {
    setLoading(true);
    getProjects();
  }, []);

  console.log(projectList);
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
      {!loading && (
        <div>
          {currentProject + 1} / {projectList.length}
        </div>
      )}
      {loading && (
        <Loader
          type='TailSpin'
          color='#72f'
          height={100}
          width={100}
          style={{ paddingTop: loading && "10%" }}
        />
      )}
      {!loading && (
        <Carousel>
          <FaChevronLeft className={projectStyles.prev} onClick={handlePrev} />

          <div {...handlers}>
            {projectList &&
              projectList
                .map((project, index) => (
                  <Card
                    key={index}
                    path={
                      project.project_url !== null ? project.project_url : ""
                    }
                    className={projectStyles.card}
                    title={project.project_name}
                    imgSrc={project.project_picture}
                    description={project.project_presentation}
                    techno={project.project_techno}
                    onClick={() => handleDelete(project)}
                  />
                ))
                .filter((p) => p.key == currentProject)}
          </div>
          <FaChevronRight className={projectStyles.next} onClick={handleNext} />
        </Carousel>
      )}
    </div>
  );
}
