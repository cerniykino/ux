import { FunctionComponent, useState, useCallback } from "react";
import Frame1 from "../components/Frame1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Property1Variant2 from "../components/Property1Variant2";
import Container from "../components/Container";
import Property1Default1 from "../components/Property1Default1";
import styles from "./Frame4.module.css";

const Frame4: FunctionComponent = () => {
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
          <b className={styles.home}>Interactive Proof Builder</b>
        </div>
        <div className={styles.subpage1}>
          <b className={styles.home}>{`Examples & Tutorials`}</b>
        </div>
        <div className={styles.subpage2}>
          <b className={styles.home}>Practice Problems</b>
        </div>
        <div className={styles.subpage3}>
          <b className={styles.home}>Resources</b>
        </div>
        <div className={styles.subpage4}>
          <b className={styles.home}>{`FAQ & Help`}</b>
        </div>
        <div className={styles.subpage5}>
          <b className={styles.home}>About Us</b>
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
        <Property1Variant2
          build="Build"
          property1Variant2Width="273px"
          property1Variant2Height="53.2px"
          property1Variant2Position="absolute"
          property1Variant2Top="162px"
          property1Variant2Left="77px"
          rectangleDivBorderRadius="58.3px"
          rectangleDivTop="calc(50% - 21.2px)"
          rectangleDivLeft="calc(50% + 9.8px)"
          rectangleDivBorderRadius1="58.3px"
          rectangleDivWidth="122.1px"
          rectangleDivHeight="42.9px"
          rectangleDivBottom="unset"
          buildTop="21.99%"
          buildLeft="64.69%"
          buildFontSize="24.5px"
        />
        <div className={styles.info}>
          <img className={styles.infoIcon} alt="" src="/info@2x.png" />
        </div>
        <div className={styles.frameItem} />
        <b className={styles.playground}>Playground</b>
        <Container />
        <Property1Default1
          group7="/group-7@2x.png"
          property1DefaultWidth="800.3px"
          property1DefaultHeight="112px"
          property1DefaultPosition="absolute"
          property1DefaultTop="360px"
          property1DefaultLeft="1187px"
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
          <Frame1/* onClose={closeFrame} *//>
        </PortalPopup>
      )}
    </>
  );
};

export default Frame4;
