import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../share/i18n";
import { useTheme } from "../../share/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const location = useLocation();
  const [activeLinkText, setActiveLinkText] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLinkText(t("menu.aboutMe"));
        break;
      case "/resume":
        setActiveLinkText(t("menu.resume"));
        break;
      case "/skills":
        setActiveLinkText(t("menu.skills"));
        break;
      case "/projects":
        setActiveLinkText(t("menu.projects"));
        break;
      case "/contact":
        setActiveLinkText(t("menu.contact"));
        break;
      default:
        setActiveLinkText("");
    }
  }, [location.pathname, t]);

  return (
    <header className={darkMode ? `${styles.darkTheme} ${styles.header}` : `${styles.lightTheme} ${styles.header}`}>
      <div className={styles.aboutH}>
        <h1>{activeLinkText}</h1>
        <div className={styles.setting}>
        <div className={styles.theme}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => toggleTheme()}
        />
        <span>{darkMode ? t("theme.dark") : t("theme.light")}</span>
        </div>
        <div className={styles.lang}>
          <button
            className={i18n.language === "en" ? styles.active : ""}
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
          <span>|</span>
          <button
            className={i18n.language === "uk" ? styles.active : ""}
            onClick={() => changeLanguage("uk")}
          >
            uk
          </button>
        </div>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.menu}>
        <div>
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            {t("menu.about")}
          </Link>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? styles.active : ""}
          >
            {t("menu.resume")}
          </Link>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? styles.active : ""}
          >
            {t("menu.skills")}
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? styles.active : ""}
          >
            {t("menu.projects")}
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? styles.active : ""}
          >
            {t("menu.contact")}
          </Link>
        </div>
      </div>
    </header>
  );
}
