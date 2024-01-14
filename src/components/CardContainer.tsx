import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  resourceImageUrl?: string;
  actionButtonText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];

  /** Action props */
  onRectangle3Click?: () => void;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  sectionTitle,
  sectionSubtitle,
  resourceImageUrl,
  actionButtonText,
  propTop,
  propLeft,
  propLeft1,
  onRectangle3Click,
}) => {
  const component5Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const solveItStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.component5} style={component5Style}>
      <b className={styles.practiceProblems}>{sectionTitle}</b>
      <b className={styles.challengeYourselfEnhance}>{sectionSubtitle}</b>
      <img className={styles.image3Icon} alt="" src={resourceImageUrl} />
      <div className={styles.component5Child} onClick={onRectangle3Click} />
      <b className={styles.solveIt} style={solveItStyle}>
        {actionButtonText}
      </b>
    </div>
  );
};

export default CardContainer;
