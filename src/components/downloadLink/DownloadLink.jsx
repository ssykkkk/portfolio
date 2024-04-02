import React from 'react';
import styles from "./DownloadLink.module.scss"
import { useTheme } from "../../share/ThemeContext";
import { useTranslation } from "react-i18next";

const FileDownloadLink = ({ fileName }) => {
    const { darkMode } = useTheme();
    const { t } = useTranslation();


  const handleDownload = () => {
    const publicPath = process.env.PUBLIC_URL;
    const filePath = `${publicPath}/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={darkMode ? `${styles.darkTheme} ${"main-content " + styles.download}` : `${styles.lightTheme} ${"main-content " + styles.download}`}>
      <p>{t("resume.downloadText")}</p>
      <button onClick={handleDownload}>{t("resume.downloadLink")}</button>
    </div>
  );
};

export default FileDownloadLink;
