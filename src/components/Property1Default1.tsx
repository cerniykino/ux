import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default1.module.css";

type Property1Default1Type = {
  group7?: string;

  /** Style props */
  property1DefaultWidth?: CSSProperties["width"];
  property1DefaultHeight?: CSSProperties["height"];
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
  logicalRulesFontSize?: CSSProperties["fontSize"];
  wrapperGroup7Height?: CSSProperties["height"];
  wrapperGroup7Width?: CSSProperties["width"];
  wrapperGroup7Top?: CSSProperties["top"];
  wrapperGroup7Bottom?: CSSProperties["bottom"];
  wrapperGroup7Left?: CSSProperties["left"];
  groupIconTransform?: CSSProperties["transform"];
};

const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  group7,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  logicalRulesFontSize,
  wrapperGroup7Height,
  wrapperGroup7Width,
  wrapperGroup7Top,
  wrapperGroup7Bottom,
  wrapperGroup7Left,
  groupIconTransform,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const logicalRulesStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: logicalRulesFontSize,
    };
  }, [logicalRulesFontSize]);

  const wrapperGroup7Style: CSSProperties = useMemo(() => {
    return {
      height: wrapperGroup7Height,
      width: wrapperGroup7Width,
      top: wrapperGroup7Top,
      bottom: wrapperGroup7Bottom,
      left: wrapperGroup7Left,
    };
  }, [
    wrapperGroup7Height,
    wrapperGroup7Width,
    wrapperGroup7Top,
    wrapperGroup7Bottom,
    wrapperGroup7Left,
  ]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: groupIconTransform,
    };
  }, [groupIconTransform]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      <b
        className={styles.logicalRules}
        style={logicalRulesStyle}
      >{`Logical rules  `}</b>
      <div className={styles.wrapperGroup7} style={wrapperGroup7Style}>
        <img
          className={styles.wrapperGroup7Child}
          alt=""
          src={group7}
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

export default Property1Default1;
