import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBrokenEssentionalUIHomClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onABBCACTextClick = useCallback(() => {
    navigate("/frame-40");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
        <div className={styles.subpage}>
            <a className={styles.home} href={'/frame-2'}>Interactive Proof Builder</a>

        </div>
        <div className={styles.subpage1}>
            <a className={styles.home} href={'frame-10'}>{`Examples & Tutorials`}</a>
        </div>
        <div className={styles.subpage2}>
            <a className={styles.home} href={'frame-12'}>Practice Problems</a>
        </div>
        <div className={styles.subpage3}>
            <a className={styles.home} href={'frame-8'}>Resources</a>
        </div>
        <div className={styles.subpage4}>
            <a className={styles.home} href={'frame-9'}>{`FAQ & Help`}</a>
        </div>
        <div className={styles.subpage5}>
            <a className={styles.home} href={'frame-7'}>About Us</a>
        </div>
      <img
        className={styles.brokenEssentionalUiHom}
        alt=""
        src="/broken--essentional-ui--home@2x.png"
        onClick={onBrokenEssentionalUIHomClick}
      />
      <img className={styles.image51Icon} alt="" src="/image5-1@2x.png" />
      <b className={styles.practiceProblemsSharpen}>
        Practice Problems: Sharpen Your Sequent Calculus Skills
      </b>
      <b
        className={styles.abbcAc}
        onClick={onABBCACTextClick}
      >{`A → B,B → C Ⱶ A → C `}</b>
      <div className={styles.abVCAbacParent}>
        <b className={styles.abVC}>{`A ∧ (B V C) Ⱶ (A ∧ B) ∨ (A ∧ C) `}</b>
      </div>
      <b className={styles.aAV}>{`A Ⱶ A V B `}</b>
      <b className={styles.aabVC}>{`A,A → (B V C) Ⱶ B `}</b>
    </div>
  );
};

export default Frame3;
