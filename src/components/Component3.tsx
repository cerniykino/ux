import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component3.module.css";

const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.component3}>
      <b className={styles.interactiveProofBuilder}>
        Interactive Proof Builder
      </b>
      <b className={styles.solvePredictVisualize}>
        Solve, Predict, Visualize: The Power of Interactive Proofs
      </b>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.component3Child} onClick={onRectangleClick} />
      <b className={styles.tryItOut}>Try it out</b>
    </div>
  );
};

export default Component3;
