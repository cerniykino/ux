import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame6.module.css";

const Frame6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBrokenEssentionalUIHomClick = useCallback(() => {
    navigate("/frame-1");
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
      <img className={styles.image31Icon} alt="" src="/image3-1@2x.png" />
      <b className={styles.q}>Q:</b>
      <b className={styles.canIUse}>
        Can I use sequent calculus to figure out what to have for dinner?
      </b>
      <b className={styles.a}>A:</b>
      <b className={styles.sureYouCould}>
        {" "}
        Sure, you could... in a way. A → B (If I have pasta, I'll need sauce), B
        → C (If I have sauce, I can make spaghetti), therefore A → C (I should
        have spaghetti for dinner). See? Handy!
      </b>
    </div>
  );
};

export default Frame6;
