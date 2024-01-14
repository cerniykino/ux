import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default4 from "../components/Property1Default4";
import Component3 from "../components/Component3";
import CardContainer from "../components/CardContainer";
import styles from "./Frame10.module.css";

const Frame10: FunctionComponent = () => {
  const navigate = useNavigate();

    const onRectangleClick12 = useCallback(() => {
        navigate("/frame-12");
    }, [navigate]);

    const onRectangleClick8 = useCallback(() => {
        navigate("/frame-8");
    }, [navigate]);

    const onRectangleClick7 = useCallback(() => {
        navigate("/frame-7");
    }, [navigate]);


  const onRectangle1Click = useCallback(() => {
    navigate("/frame-10");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <Property1Default4
        showHome={false}
        property1DefaultWidth="84px"
        property1DefaultPosition="absolute"
        property1DefaultTop="29px"
        property1DefaultLeft="115px"
      />
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
      />
      <b className={styles.welcomeToSequentmaster}>
        Welcome to SequentMaster: Your Ultimate Destination for Sequent Calculus
      </b>
      <i className={styles.diveIntoThe}>
        Dive into the world of logical reasoning like never before.
      </i>
      <Component3 />
      <div className={styles.component4}>
        <b className={styles.interactiveProofBuilder}>Examples and Tutorials</b>
        <b className={styles.solvePredictVisualize}>
          Learn and Explore: Guided Pathways in Sequent Calculus
        </b>
        <img className={styles.image3Icon} alt="" src="/img.png" />
        <div className={styles.component4Child} onClick={onRectangle1Click} />
        <b className={styles.learnNow}>Learn Now</b>
      </div>
      <CardContainer
        sectionTitle="Practice Problems"
        sectionSubtitle="Challenge Yourself: Enhance Your Skills with Practical Problems"
        resourceImageUrl="/img_3.png"
        actionButtonText="Solve It"
        propTop="413px"
        propLeft="1235px"
        propLeft1="42.41%"
        onRectangle3Click={onRectangleClick12}
      />
      <CardContainer
        sectionTitle="Resources"
        sectionSubtitle="Expand Your Horizons: Books, Videos, and More"
        resourceImageUrl="/img_1.png"
        actionButtonText="Explore"
        propTop="879px"
        propLeft="178px"
        propLeft1="42.21%"
        onRectangle3Click={onRectangleClick8}
      />
      <div className={styles.component9}>
        <b className={styles.interactiveProofBuilder}>FAQ</b>
        <b className={styles.solvePredictVisualize}>
          Got Questions? We (Might) Have Answers!
        </b>
        <img className={styles.image3Icon1} alt="" src="/img_2.png" />
        <div className={styles.component4Child} onClick={onRectangle2Click} />
        <b className={styles.askAway}>Ask Away</b>
      </div>
      <CardContainer
        sectionTitle="About Us"
        sectionSubtitle="Meet the Minds Behind SequentMaster"
        resourceImageUrl="/img_4.png"
        actionButtonText="Meet Us"
        propTop="878px"
        propLeft="1238px"
        propLeft1="41.42%"
        onRectangle3Click={onRectangleClick7}
      />
    </div>
  );
};

export default Frame10;
