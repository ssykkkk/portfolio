import React, { useState } from "react";
import { withLayout } from "../../App/App";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../share/ThemeContext";
import styles from "./Projects.module.scss";
import Project from "./Project";
import flashcardImg from "../../../share/img/projects/flashcards.png";
import htmlImg from "../../../share/img/projects/html-layout.png";
import libraryImg from "../../../share/img/projects/library.png";
import angulImg from "../../../share/img/projects/angul.png";
import reactImg from "../../../share/img/projects/react.png";
import portfolioImg from "../../../share/img/projects/portfolio.png";

function Projects() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const [activeProjectId, setActiveProjectId] = useState(null);

  const openProject = (projectId) => {
    setActiveProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <div
      className={
        darkMode
          ? `${styles.darkTheme} ${"main-content " + styles.projects}`
          : `${styles.lightTheme} ${"main-content " + styles.projects}`
      }
    >
      <div className={styles.wrap}>
      <Project
          id={1}
          name={t("projects.portfolio.name")}
          img={portfolioImg}
          title={t("projects.portfolio.title")}
          url="https://portfolio-kozak.netlify.app/"
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/portfolio.git"
          lang= "React JS"
        />
        <Project
          id={2}
          name={t("projects.flashcards.name")}
          img={flashcardImg}
          title={t("projects.flashcards.title")}
          url="https://fleshcards-learn.netlify.app/"
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/flashcards-React-Redux.git"
          lang= "React JS, Redux"
        />
        <Project
          id={3}
          name={t("projects.html.name")}
          img={htmlImg}
          title={t("projects.html.title")}
          url="https://html-layout-app.netlify.app/"
          isThird = {true}
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/html-layout.git"
          lang= {t("projects.tooltip.langlayo")}
        />
        <Project
          id={4}
          name={t("projects.library.name")}
          img={libraryImg}
          title={t("projects.library.title")}
          url="http://accounting-of-books.000.pe/books.php"
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/accounting-of-books--library-.git"
          lang= "PHP"
        />
        <Project
          id={5}
          name={t("projects.angl.name")}
          img={angulImg}
          title={t("projects.angl.title")}
          url="https://astounding-chimera-e8870b.netlify.app/"
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/flashcards-React-Redux.git"
          lang= "Angular"
        />
        <Project
          id={6}
          name={t("projects.angl.name")}
          img={reactImg}
          isThird={true}
          title={t("projects.angl.title")}
          url="https://legendary-sunshine-dfbcb5.netlify.app/"
          openProject={openProject}
          activeProjectId={activeProjectId}
          link="https://github.com/ssykkkk/api-react-redux.git"
          lang= "React JS, Redux"
        />
      </div>
    </div>
  );
}

export default withLayout(Projects);
