import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "../components/Property1Default";
import styles from "./Frame5.module.css";

const Frame5: FunctionComponent = () => {
  const navigate = useNavigate();

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
      <img
        className={styles.brokenEssentionalUiHom}
        alt=""
        src="/broken--essentional-ui--home@2x.png"
        onClick={onBrokenEssentionalUIHomClick}
      />
      <b className={styles.aBriefGuide}>A Brief Guide to Sequent Calculus</b>
      <b className={styles.whatIsSequent}>What is Sequent Calculus?</b>
      <b className={styles.sequentCalculusIs}>
        Sequent calculus is a logical system for studying formal proofs,
        developed by Gerhard Gentzen. It's a way to represent logical arguments,
        where a sequent indicates that if all formulas on its left side (the
        antecedent) are true, then at least one formula on its right side (the
        succedent) is true.
      </b>
      <b className={styles.coreComponents}>Core Components:</b>
      <b className={styles.exampleOfAContainer}>
        <p className={styles.exampleOfA}>Example of a Proof:</p>
        <p className={styles.exampleOfA}>&nbsp;</p>
      </b>
      <b className={styles.rules}>Rules</b>
      <b className={styles.sequentsExpressionsIndicatiContainer}>
        <p className={styles.exampleOfA}>
          <span className={styles.sequents}>{`Sequents: `}</span>
          <span>
            Expressions indicating relationships between sets of formulas.
          </span>
        </p>
        <p className={styles.exampleOfA}>
          <span className={styles.sequents}>Inference Rules:</span>
          <span> Guidelines for deriving new sequents from existing ones.</span>
        </p>
        <p className={styles.exampleOfA}>
          <span className={styles.sequents}>{`Proofs: `}</span>
          <span>
            Sequences of inferences starting from basic assumptions and leading
            to conclusions.
          </span>
        </p>
      </b>
      <b className={styles.anExampleWould}>
        An example would be proving that if "A implies B" and "B implies C,"
        then "A implies C." This involves applying rules to decompose the
        implications and establish a logical connection.
      </b>
      <img className={styles.image41Icon} alt="" src="/image4-1@2x.png" />
      <div className={styles.wrapperLine23}>
        <img
          className={styles.wrapperLine23Child}
          alt=""
          src="/line-23@2x.png"
        />
      </div>
      <div className={styles.wrapperGroup15}>
        <img
          className={styles.wrapperGroup15Child}
          alt=""
          src="/group-15@2x.png"
        />
      </div>
      <img className={styles.frameItem} alt="" src="/group-16@2x.png" />
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/line-9@2x.png" />
      </div>
      <i className={styles.a}>, A</i>
      <div className={styles.wrapperGroup18}>
        <img
          className={styles.wrapperGroup15Child}
          alt=""
          src="/group-18@2x.png"
        />
      </div>
      <img className={styles.frameInner} alt="" src="/group-19@2x.png" />
      <div className={styles.lineGroup}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/line-19@2x.png" />
      </div>
      <i className={styles.a1}>, A</i>
      <div className={styles.wrapperGroup21}>
        <img
          className={styles.wrapperGroup21Child}
          alt=""
          src="/group-21@2x.png"
        />
      </div>
      <i className={styles.l}>( L)</i>
      <div className={styles.wrapperGroup13}>
        <img
          className={styles.wrapperGroup21Child}
          alt=""
          src="/group-13@2x.png"
        />
      </div>
      <i className={styles.howItWorks}>How it works:</i>
      <Property1Default
        group26="/group-26@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="1362px"
        property1DefaultLeft="739px"
      />
      <b className={styles.negation}>Negation</b>
    </div>
  );
};

export default Frame5;
