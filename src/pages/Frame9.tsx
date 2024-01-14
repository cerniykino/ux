import { FunctionComponent, useState, useCallback } from "react";
import ABBCAC from "../components/ABBCAC";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Component9 from "../components/Component9";
import Component10Icon from "../components/Component10Icon";
import Component11Icon from "../components/Component11Icon";
import Property1Variant2 from "../components/Property1Variant2";
import Property1Default1 from "../components/Property1Default1";
import styles from "./Frame9.module.css";

const Frame9: FunctionComponent = () => {
  const [isABBCACOpen, setABBCACOpen] = useState(false);
  const navigate = useNavigate();

  const onSubPageContainer1Click = useCallback(() => {
    navigate("/frame-10");
  }, [navigate]);

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
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.egA}>e.g., A → B, B → C Ⱶ A → C</div>
      </div>
      <Component9
        rectangle13="/rectangle-13@2x.png"
        askAway="Generate proof"
        component9Width="429px"
        component9Height="82.4px"
        component9Position="absolute"
        component9Top="367px"
        component9Left="745px"
        component9Cursor="pointer"
        rectangleIconBorderRadius="64.12px"
        askAwayTop="24.03%"
        askAwayLeft="19.7%"
        askAwayFontSize="35.1px"
      />
      <Component10Icon />
      <Component11Icon dimensionCode="/component-11@2x.png" propLeft="628px" />
      <Component11Icon dimensionCode="/component-12@2x.png" propLeft="768px" />
      <Component11Icon dimensionCode="/component-12@2x.png" propLeft="908px" />
      <Component11Icon dimensionCode="/component-12@2x.png" propLeft="1048px" />
      <Component11Icon dimensionCode="/component-12@2x.png" propLeft="1188px" />
      <img className={styles.frameItem} alt="" src="/line-12@2x.png" />
      <img className={styles.frameInner} alt="" src="/line-13@2x.png" />
      <img className={styles.lineIcon} alt="" src="/line-14@2x.png" />
      <img className={styles.frameChild1} alt="" src="/line-15@2x.png" />
      <img className={styles.frameChild2} alt="" src="/line-16@2x.png" />
      <img className={styles.frameChild3} alt="" src="/line-19@2x.png" />
      <img className={styles.frameChild4} alt="" src="/line-20@2x.png" />
      <Component11Icon dimensionCode="/component-12@2x.png" propLeft="1328px" />
      <div className={styles.wrapperLine21}>
        <img
          className={styles.wrapperLine21Child}
          alt=""
          src="/line-19@2x.png"
        />
      </div>
      <img className={styles.frameChild5} alt="" src="/line-20@2x.png" />
      <img className={styles.frameChild6} alt="" src="/line-17@2x.png" />
      <img className={styles.frameChild7} alt="" src="/line-18@2x.png" />
      <img
        className={styles.brokenEssentionalUiHom}
        alt=""
        src="/broken--essentional-ui--home@2x.png"
        onClick={onBrokenEssentionalUIHomClick}
      />
      <Property1Variant2
        build="Solve"
        property1Variant2Width="273px"
        property1Variant2Height="53.2px"
        property1Variant2Position="absolute"
        property1Variant2Top="162px"
        property1Variant2Left="77px"
        rectangleDivBorderRadius="58.3px"
        rectangleDivTop="9.02%"
        rectangleDivLeft="5.5px"
        rectangleDivBorderRadius1="58.3px"
        rectangleDivWidth="122.1px"
        rectangleDivHeight="80.64%"
        rectangleDivBottom="10.34%"
        buildTop="21.24%"
        buildLeft="12.2%"
        buildFontSize="24.5px"
      />
      <b className={styles.proofTree}>Proof tree</b>

      <Property1Default1
        group7="/group-71@2x.png"
        property1DefaultWidth="800.3px"
        property1DefaultHeight="112px"
        property1DefaultPosition="absolute"
        property1DefaultTop="490px"
        property1DefaultLeft="1012px"
        logicalRulesFontSize="46.1px"
        wrapperGroup7Height="13.48%"
        wrapperGroup7Width="6.37%"
        wrapperGroup7Top="20.63%"
        wrapperGroup7Bottom="65.89%"
        wrapperGroup7Left="71.2%"
        groupIconTransform="scale(1.437)"
      />
    </div>
  );
};

export default Frame9;
