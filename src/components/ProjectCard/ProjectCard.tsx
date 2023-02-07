import React from "react";
import styles from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectArrayI } from "../../data/project";

const ProjectCard = ({ img, name, ghLink, pLink }: ProjectArrayI) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>

      <div className={styles.hoverItem}>
        <div className={styles.links}>
          <a className={styles.icon} href={ghLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className={styles.icon} href={pLink} target="_blank">
            <FontAwesomeIcon icon={faDisplay} />
          </a>
        </div>
      </div>

      <h3>{name}</h3>
    </div>
  );
};

export default ProjectCard;
