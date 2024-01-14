import {FunctionComponent, useCallback} from "react";
import styles from "./Frame8.module.css";
import {useNavigate} from "react-router-dom";

const Frame8: FunctionComponent = () => {
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
      <div className={styles.clickMe}>
        <b className={styles.home}>Click me!</b>
      </div>
    </div>
  );
};

export default Frame8;
