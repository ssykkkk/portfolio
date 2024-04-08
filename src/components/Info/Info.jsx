import styles from "./Info.module.scss";
import myPic from "../../share/img/photo_2023-02-27_15-29-43.jpg";
import mailImg from "../../share/img/mail.png";
import smartphoneImg from "../../share/img/smartphone.png";
import locationImg from "../../share/img/location.png";
import insta from "../../share/img/instagram.png";
import github from "../../share/img/github.png";
import linkedin from "../../share/img/linkedin.png";
import telegram from "../../share/img/telegram.png";
import InfoContact from "../InfoContact/InfoContact";
import { useTranslation } from "react-i18next";
import { useTheme } from '../../share/ThemeContext';
import { IoMenu } from "react-icons/io5";

export default function Info() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? `${styles.darkTheme} ${styles.mainInfo}` : `${styles.lightTheme} ${styles.mainInfo}`}>
      <span className={styles.menuBurger}><IoMenu /></span>
      <div className={styles.mainMe}>
        <div className={styles.myPic}>
          <img src={myPic} alt="Me" />
        </div>
        <div className={styles.name}>
          <h2>{t("info.name")}</h2>
        </div>
        <div className={styles.status}>
          <span>#opentowork</span>
        </div>
      </div>
      <div className={styles.contacts}>
        <InfoContact
          link="mailto:"
          contact="ssk.kozak@gmail.com"
          img={mailImg}
          name={t("info.mail")}
          contactDispalay="ssk.kozak@gmail.com"
        />
        <InfoContact
          link="tel:"
          contact="+380636552119"
          img={smartphoneImg}
          name={t("info.phone")}
          contactDispalay="+38 (063) 655-21-19"
        />
        <InfoContact
          link="https://maps.app.goo.gl/46BaN4XQgBMXip9Q9"
          img={locationImg}
          name={t("info.locationT")}
          contactDispalay={t("info.location")}
        />
        <div className={styles.socialNet}>
          <div className={styles.linkImg}>
            <a href="https://www.instagram.com/ssssss__kkkk">
              <img src={insta} alt="instagram" />
            </a>
            <a href="https://t.me/ssykkkk">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://github.com/ssykkkk">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/stanislav-kozak-377590180/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
