import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../share/ThemeContext";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import { BiError } from "react-icons/bi";
export default function ErrorPage() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? `${styles.darkTheme} ${"main-content " + styles.error}`
          : `${styles.lightTheme} ${"main-content " + styles.error}`
      }
    >
      <div className={styles.wrap}>
        <div>
          <h3>{t("error.oops")}</h3>
          <h1>404</h1>
          <span className={styles.icon}><BiError /></span>
          <h3>{t("error.page")}</h3>
          <span>{t("error.look")}</span>
          <Link to="/">
            <span>{t("error.butt")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
