import { withLayout } from "../../App/App";
import FileDownloadLink from "../../downloadLink/DownloadLink";
import styles from "./Resume.module.scss";
import bg  from "../../../share/img/resume_bg.PNG"
function Resume() {
    
  return (
    <div className={styles.wrap}>
      {/* <div className={styles.bg}>
      <img src={bg} alt="bg" />
       </div>
       <div className={styles.text}> */}
      <FileDownloadLink fileName="example.txt" />
    {/* </div> */}
    </div>
  );
}

export default withLayout(Resume);
