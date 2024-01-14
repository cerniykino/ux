import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default4.module.css";

type Property1Default4Type = {
  showHome?: boolean;

  /** Style props */
  property1DefaultWidth?: CSSProperties["width"];
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default4: FunctionComponent<Property1Default4Type> = ({
  showHome,
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      {showHome && <b className={styles.home}>Home</b>}
    </div>
  );
};

export default Property1Default4;
