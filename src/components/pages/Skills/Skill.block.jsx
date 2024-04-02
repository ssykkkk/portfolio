import React from "react";
import styles from "./Skills.module.scss";

export default function SkillBlock({ name, per, img }) {
  return (
    <div className={styles.skill}>
      <div className={styles.img}>
        <img src={img} alt="code" />
      </div>
      <div className={styles.block}>
        {/* <img src={img} alt="" /> */}
        <div className={styles.skillName}>{name}</div>

        <div className={styles.skillBar}>
          <div
            className={styles.skillPer}
            per={per}
            style={{ "max-width": per }}
          ></div>
        </div>
      </div>
    </div>
  );
}
