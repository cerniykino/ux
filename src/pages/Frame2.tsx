import { FunctionComponent, useState, useCallback } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Property1Default1 from "../components/Property1Default1";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onBrokenEssentionalUIHomClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <>
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
        <div className={styles.component9} onClick={openFrame}>
          <img
            className={styles.component9Child}
            alt=""
            src="/broken--essentional-ui--home@2x.png"
          />
          <b className={styles.askAway}>Check</b>
        </div>
        <img
          className={styles.brokenEssentionalUiHom}
          alt=""
          src="/broken--essentional-ui--home@2x.png"
          onClick={onBrokenEssentionalUIHomClick}
        />
        <div className={styles.frameItem} />
        <div className={styles.wrapperLine31}>
          <img
            className={styles.wrapperLine31Child}
            alt=""
            src="/line-311@2x.png"
          />
        </div>
        <div className={styles.aBBContainer}>
          <i>{`A, B, B → C `}</i>
          <span>Ⱶ</span>
          <i> C</i>
        </div>
        <div className={styles.abbcAc}>
          <i>{`A → B, B → C `}</i>
          <span>Ⱶ</span>
          <i>{`A → C `}</i>
        </div>
        <div className={styles.arrow}>
          <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
        </div>
        <Property1Default1
          group7="/group-71@2x.png"
          property1DefaultWidth="800.3px"
          property1DefaultHeight="112px"
          property1DefaultPosition="absolute"
          property1DefaultTop="351px"
          property1DefaultLeft="1243px"
          logicalRulesFontSize="46.1px"
          wrapperGroup7Height="13.48%"
          wrapperGroup7Width="6.37%"
          wrapperGroup7Top="20.63%"
          wrapperGroup7Bottom="65.89%"
          wrapperGroup7Left="71.2%"
          groupIconTransform="scale(1.437)"
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame /*onClose={closeFrame}*/ />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame2;
