import { FunctionComponent } from "react";
import styles from "./ABBCAC.module.css";

const ABBCAC: FunctionComponent = () => {
    return (
        <div className={styles.aBBCAC}>
            <div className={styles.aBContainer}>
                <i>{`A → B, B → C `}</i>
                <span>Ⱶ</span>
                <i> A → C</i>
            </div>
            <img className={styles.playIcon} alt="" src="/play@2x.png" />
            <img className={styles.playIcon1} alt="" src="/play1@2x.png" />
        </div>
    );
};

export default ABBCAC;

