import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant2.module.css";

type Property1Variant2Type = {
  build?: string;

  /** Style props */
  property1Variant2Width?: CSSProperties["width"];
  property1Variant2Height?: CSSProperties["height"];
  property1Variant2Position?: CSSProperties["position"];
  property1Variant2Top?: CSSProperties["top"];
  property1Variant2Left?: CSSProperties["left"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivBorderRadius1?: CSSProperties["borderRadius"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivBottom?: CSSProperties["bottom"];
  buildTop?: CSSProperties["top"];
  buildLeft?: CSSProperties["left"];
  buildFontSize?: CSSProperties["fontSize"];
};

const Property1Variant2: FunctionComponent<Property1Variant2Type> = ({
  build,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
  rectangleDivBorderRadius,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivBorderRadius1,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivBottom,
  buildTop,
  buildLeft,
  buildFontSize,
}) => {
  const property1Variant2Style: CSSProperties = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBorderRadius]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius1,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      bottom: rectangleDivBottom,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivBorderRadius1,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivBottom,
  ]);

  const buildStyle: CSSProperties = useMemo(() => {
    return {
      top: buildTop,
      left: buildLeft,
      fontSize: buildFontSize,
    };
  }, [buildTop, buildLeft, buildFontSize]);

  return (
    <div className={styles.property1variant2} style={property1Variant2Style}>
      <div
        className={styles.property1variant2Child}
        style={rectangleDivStyle}
      />
      <div
        className={styles.property1variant2Item}
        style={rectangleDiv1Style}
      />
      <b className={styles.build} style={buildStyle}>
        {build}
      </b>
    </div>
  );
};

export default Property1Variant2;
