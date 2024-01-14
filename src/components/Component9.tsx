import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component9.module.css";

type Component9Type = {
  rectangle13?: string;
  askAway?: string;

  /** Style props */
  component9Width?: CSSProperties["width"];
  component9Height?: CSSProperties["height"];
  component9Position?: CSSProperties["position"];
  component9Top?: CSSProperties["top"];
  component9Left?: CSSProperties["left"];
  component9Cursor?: CSSProperties["cursor"];
  rectangleIconBorderRadius?: CSSProperties["borderRadius"];
  askAwayTop?: CSSProperties["top"];
  askAwayLeft?: CSSProperties["left"];
  askAwayFontSize?: CSSProperties["fontSize"];
};

const Component9: FunctionComponent<Component9Type> = ({
  rectangle13,
  askAway,
  component9Width,
  component9Height,
  component9Position,
  component9Top,
  component9Left,
  component9Cursor,
  rectangleIconBorderRadius,
  askAwayTop,
  askAwayLeft,
  askAwayFontSize,
}) => {
  const component9Style: CSSProperties = useMemo(() => {
    return {
      width: component9Width,
      height: component9Height,
      position: component9Position,
      top: component9Top,
      left: component9Left,
      cursor: component9Cursor,
    };
  }, [
    component9Width,
    component9Height,
    component9Position,
    component9Top,
    component9Left,
    component9Cursor,
  ]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleIconBorderRadius,
    };
  }, [rectangleIconBorderRadius]);

  const askAwayStyle: CSSProperties = useMemo(() => {
    return {
      top: askAwayTop,
      left: askAwayLeft,
      fontSize: askAwayFontSize,
    };
  }, [askAwayTop, askAwayLeft, askAwayFontSize]);

  return (
    <div className={styles.component9} style={component9Style}>
      <img
        className={styles.component9Child}
        alt=""
        src={rectangle13}
        style={rectangleIconStyle}
      />
      <b className={styles.askAway} style={askAwayStyle}>
        {askAway}
      </b>
    </div>
  );
};

export default Component9;
