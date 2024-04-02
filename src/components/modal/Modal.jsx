import styles from "./Modal.module.scss";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Modal({openModal, children }) {
  return (
    <div
      className={styles.modalWrap}
      onClick={() => openModal()}
    >
      <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
        <IconContext.Provider
          value={{ size: "25px", className: `icon ${styles.icon}` }}
        >
          <IoMdClose onClick={() => openModal()} />
        </IconContext.Provider>

        {children}
      </div>
    </div>
  );
}
