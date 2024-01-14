import { FunctionComponent } from "react";
import styles from "./Frame11.module.css";

const Frame11: FunctionComponent = () => {
  return (
    <div className={styles.proofTreeParent}>
      <b className={styles.proofTree}>Proof tree</b>
      <div className={styles.wrapperLine30Parent}>
        <div className={styles.wrapperLine30}>
          <img
            className={styles.wrapperLine30Child}
            alt=""
            src="/line-30@2x.png"
          />
        </div>
        <div className={styles.wrapperLine32}>
          <img
            className={styles.wrapperLine32Child}
            alt=""
            src="/line-32@2x.png"
          />
        </div>
        <div className={styles.wrapperLine33}>
          <img
            className={styles.wrapperLine33Child}
            alt=""
            src="/line-33@2x.png"
          />
        </div>
        <div className={styles.wrapperLine31}>
          <img
            className={styles.wrapperLine30Child}
            alt=""
            src="/line-31@2x.png"
          />
        </div>
        <div className={styles.aBContainer}>
          <i>{`A → B, B → C `}</i>
          <span>Ⱶ</span>
          <i> A → C</i>
        </div>
        <div className={styles.aBContainer1}>
          <i>{`A, B → B, B → C `}</i>
          <span>Ⱶ</span>
          <i> C</i>
        </div>
        <div className={styles.aBBContainer}>
          <i>{`A, B, B → C `}</i>
          <span>Ⱶ</span>
          <i> C</i>
        </div>
        <div className={styles.aBCContainer}>
          <i>{`A, B, C `}</i>
          <span>Ⱶ</span>
          <i> C</i>
        </div>
        <div className={styles.cCContainer}>
          <i>{`C `}</i>
          <span>Ⱶ</span>
          <i> C</i>
        </div>
        <i className={styles.l}>(→L)</i>
        <i className={styles.id}>(Id)</i>
        <i className={styles.l1}>(→L)</i>
        <i className={styles.r}>(→R)</i>
      </div>
    </div>
  );
};

export default Frame11;
