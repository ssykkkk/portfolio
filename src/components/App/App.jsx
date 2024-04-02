import Header from "../Header/Header";
import Info from "../Info/Info";
import styles from "./App.module.scss";
import { useTheme } from "../../share/ThemeContext";

function App({ children }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? `${styles.darkTheme} ${styles.wrap}`
          : `${styles.lightTheme} ${styles.wrap}`
      }
    >
      <Info />
      <section
        className={
          darkMode
            ? styles.darkThemeWrap + " wrap"
            : styles.lightThemeWrap + " wrap"
        }
      >
        {children}
      </section>
    </div>
  );
}

export const withLayout = (Component) =>
  function wLC(props) {
    return (
      <App>
        <Header />
        <Component {...props} />
      </App>
    );
  };
