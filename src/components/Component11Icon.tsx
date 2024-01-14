import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component11Icon.module.css";

type Component11IconType = {
  dimensionCode?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Component11Icon: FunctionComponent<Component11IconType> = ({
  dimensionCode,
  propLeft,
}) => {
  const component11IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.component11Icon}
      alt=""
      src={dimensionCode}
      style={component11IconStyle}
    />
  );
};

export default Component11Icon;
