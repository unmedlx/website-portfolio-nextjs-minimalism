import React from "react";
import Head from "next/head";
import styles from "../styles/Project.module.scss";
import Title from "../components/Title/Title";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projectArray } from "../data/project";

const projectPage = () => {
  return (
    <>
      <Head>
        <title>Project Page</title>
        <meta name="description" content="Project Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pageContainer">
        <Title text1="My" text2="Projects" />

        <div className={styles.projectsContainer}>
          {projectArray.map(({ id, name, img, ghLink, pLink }) => (
            <ProjectCard
              key={id}
              name={name}
              img={img}
              ghLink={ghLink}
              pLink={pLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default projectPage;
