import { withLayout } from "../../App/App";
import styles from "./About.module.scss";
import webCode from "../../../share/img/web-coding.svg";
import webDesign from "../../../share/img/web-design.svg";
import turnMob from "../../../share/img/turn-mobile.svg";
import interact from "../../../share/img/interaction.svg";
import optimiz from "../../../share/img/optimization.svg";
import verif from "../../../share/img/verification.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../share/ThemeContext";

function About() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? `${styles.darkTheme} ${"main-content " + styles.about}` : `${styles.lightTheme} ${"main-content " + styles.about}`}>
      <div className={styles.textMe}>
        <p>{t("pageAbout.pAbout1")}</p>
        <p>{t("pageAbout.pAbout2")}</p>
        <p>{t("pageAbout.pAbout3")}</p>
        <p>{t("pageAbout.pAbout4")}</p>
      </div>
      <div className={styles.whatIDo}>
        <h3>{t("pageAbout.whatido")}</h3>
        <div className={styles.gridBlock}>
          <div>
            <img src={webCode} alt="" />
            <div className={styles.content}>
              <b>{t("pageAbout.b1t")}</b>
              <p>{t("pageAbout.b1p")}</p>
            </div>
          </div>
          <div>
            <img src={webDesign} alt="" />
            <div className={styles.content}>
              <b>{t("pageAbout.b2t")}</b>
              <p>{t("pageAbout.b2p")}</p>
            </div>
          </div>
          <div>
            <img src={turnMob} alt="" />
            <div className={styles.content}>
            <b>{t("pageAbout.b3t")}</b>
              <p>{t("pageAbout.b3p")}</p>
            </div>
          </div>
          <div>
            <img src={interact} alt="" />
            <div className={styles.content}>
            <b>{t("pageAbout.b4t")}</b>
              <p>{t("pageAbout.b4p")}</p>
            </div>
          </div>
          <div>
            <img src={optimiz} alt="" />
            <div className={styles.content}>
            <b>{t("pageAbout.b5t")}</b>
              <p>{t("pageAbout.b5p")}</p>
            </div>
          </div>
          <div>
            <img src={verif} alt="" />
            <div className={styles.content}>
            <b>{t("pageAbout.b6t")}</b>
              <p>{t("pageAbout.b6p")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(About);
