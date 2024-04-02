import styles from "./InfoContact.module.scss";
import { useTheme } from '../../share/ThemeContext';

export default function InfoContact({link,contact, img, name, contactDispalay}) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? `${styles.darkTheme} ${styles.contact}` : `${styles.lightTheme} ${styles.contact}`}>
      <div className={styles.linkImg}>
        <a href={ link + contact}>
          <img src={img} alt={name} />
        </a>
      </div>
      <div className={styles.contText}>
        <span>{name}</span>
        <a href={ link + contact}>{contactDispalay}</a>
      </div>
    </div>
  );
}
