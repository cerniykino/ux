import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.almostThereYourSequentIsnWrapper}>
        <b
          className={styles.almostThereYour}
        >{`Almost There! Your sequent isn't quite right yet. `}</b>
      </div>
    </div>
  );
};

export default Frame;
