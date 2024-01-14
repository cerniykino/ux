import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default.module.css";

type Property1DefaultType = {
  group26?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  group26,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.wrapperGroup25}>
        <img
          className={styles.wrapperGroup25Child}
          alt=""
          src="/group-25@2x.png"
        />
      </div>
      <img className={styles.property1defaultChild} alt="" src={group26} />
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/line-92@2x.png" />
      </div>
      <i className={styles.a}>, A</i>
      <div className={styles.wrapperGroup28}>
        <img
          className={styles.wrapperGroup28Child}
          alt=""
          src="/group-28@2x.png"
        />
      </div>
    </div>
  );
};

export default Property1Default;
