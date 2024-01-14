import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.successYourSequentIsValidParent}>
      <b className={styles.successYourSequentContainer}>
        <span>{`Success! Your sequent is valid. `}</span>
        <span className={styles.span}>🎉</span>
      </b>
    </div>
  );
};

export default Frame1;
