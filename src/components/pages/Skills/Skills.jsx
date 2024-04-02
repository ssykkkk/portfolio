import { withLayout } from "../../App/App";
import styles from "./Skills.module.scss";
import { useTheme } from "../../../share/ThemeContext";
import SkillBlock from "./Skill.block";
import htmlImg from "../../../share/img/htmlcssjs.png";
import reactImg from "../../../share/img/react.png";
import angularImg from "../../../share/img/angular.png";
import tsImg from "../../../share/img/typescript.png";
import bootstrapImg from "../../../share/img/bootstrap.png";
import sassImg from "../../../share/img/sass.png";
import jestImg from "../../../share/img/jest.png";

function Skills() {
  const { darkMode } = useTheme();
  return (
    <div
      className={
        darkMode
          ? `${styles.darkTheme} ${"main-content " + styles.skills}`
          : `${styles.lightTheme} ${"main-content " + styles.skills}`
      }
    >
      <div className={styles.wrap}>
        <SkillBlock name="HTML/CSS/JS" per="90%" img={htmlImg} />
        <SkillBlock name="TS" per="60%" img={tsImg} />
        <SkillBlock name="React" per="55%" img={reactImg} />
        <SkillBlock name="Angular" per="40%" img={angularImg} />
        <SkillBlock name="SASS" per="90%" img={sassImg} />
        <SkillBlock name="Bootstrap" per="60%" img={bootstrapImg} />
        <SkillBlock name="Jest" per="20%" img={jestImg} />
      </div>
    </div>
  );
}

export default withLayout(Skills);
