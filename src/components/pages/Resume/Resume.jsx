import { withLayout } from "../../App/App";
import FileDownloadLink from "../../downloadLink/DownloadLink";
import styles from "./Resume.module.scss";
function Resume() {
    
  return (
    <div className={styles.wrap}>
      <FileDownloadLink fileName="example.txt" />
    </div>
  );
}

export default withLayout(Resume);
