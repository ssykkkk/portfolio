import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import github from "../../../share/img/github.png";

export default function Project({
  id,
  name,
  img,
  title,
  url,
  isThird = false,
  openProject,
  activeProjectId,
  link,
  lang
}) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    openProject(id);
  };

  return (
    <div className={styles.project}>
      <div className={styles.name}>
        <span>{name}</span>
      </div>
      <div className={styles.body}>
        <img src={img} alt="site icon" />
        <p>{title.slice(0, 100)}...</p>
      </div>
      <div className={styles.url}>
        <Link to={url} target="_blank">
          <span>{t("projects.butt")}</span>
          <span className={styles.arrow}>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
      <div
        style={
          id === activeProjectId
            ? { backgroundColor: "rgb(138, 214, 138)" }
            : null
        }
        className={styles.more}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {!(isHovered || id === activeProjectId) && <FaEyeSlash />}
        {(isHovered || id === activeProjectId) && <FaEye />}
      </div>
      {(isHovered || id === activeProjectId) && (
        <div className={isThird ? styles.leftTooltip : styles.tooltip}>
          <div className={styles.tooltipName}>
            <span>{t("projects.tooltip.name")}:</span>
            <span>{name}</span>
          </div>
          <div className={styles.tooltipTitle}>
            <span>{t("projects.tooltip.title")}:&nbsp;&nbsp;&nbsp;</span>
            <span>{title}</span>
          </div>
          <div className={styles.tooltipLang}>
            <span>{t("projects.tooltip.lang")}:</span>
            <span>{lang}</span>
          </div>
          <div className={styles.tooltipLink}>
            <span>{t("projects.tooltip.link")}:</span>
          <Link
            to={link}
            target="_blank"
          >
            <img src={github} alt="github" />
            <span>{t("projects.tooltip.butt")}</span>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}
