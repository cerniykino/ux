import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame7.module.css";

const Frame7: FunctionComponent = () => {
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
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <a
        className={styles.mitOpencourseware}
        href="https://youtu.be/N-_XmLanPYg?si=ctpFW3rC61IJOTTk"
        target="_blank"
      >
        MIT OpenCourseWare - Mathematical Logic Lectures
      </a>
      <a
        className={styles.introductionToLogic}
        href={`https://youtube.com/playlist?list=PL2uWqdcaf189i8r_Rh-1dFLmRjKN3EwDI&si=xc0v9-wZS8YkLivh`}
        target="_blank"
      >
        Introduction to Logic
      </a>
      <a
        className={styles.stanfordEncyclopediaOf}
        href="https://plato.stanford.edu/entries/proof-theory/"
        target="_blank"
      >
        Stanford Encyclopedia of Philosophy - Entry on Proof Theory
      </a>
      <a
        className={styles.nlabSequentCalculus}
        href="https://ncatlab.org/nlab/show/sequent+calculus"
        target="_blank"
      >
        nLab Sequent Calculus page
      </a>
      <a
        className={styles.interactiveTutorialsOr}
        href="https://logitext.mit.edu/tutorial"
        target="_blank"
      >
        Interactive tutorials or web applications on sequent calculus
      </a>
      <a
        className={styles.wikipediaEntryOn}
        href="https://en.wikipedia.org/wiki/Sequent_calculus#:~:text=Sequent%20calculus%20can%20be%20seen,one%20arrives%20at%20trivial%20ones."
        target="_blank"
      >
        Wikipedia entry on Sequent Calculus
      </a>
      <b className={styles.proofsAndTypes}>
        "Proofs and Types" by Jean-Yves Girard, Yves Lafont, and Paul Taylor
      </b>
      <b className={styles.basicProofTheory}>
        "Basic Proof Theory" by A.S. Troelstra and H. Schwichtenberg
      </b>
      <b className={styles.lecturesOnThe}>
        "Lectures on the Curry-Howard Isomorphism" by Morten Heine Sørensen and
        Paweł Urzyczyn
      </b>
      <a
        className={styles.howToUnderstand}
        href="https://youtu.be/hoE-XBklNVU?si=NE0p-vVFmAZjzS0h"
        target="_blank"
      >
        How to understand Sequent Calculus
      </a>
      <a
        className={styles.introductionToSequent}
        href="https://youtu.be/xLRUofFSq5Y?si=-Oz6ilFRecWuoR1u"
        target="_blank"
      >
        Introduction to Sequent Calculus
      </a>
    </div>
  );
};

export default Frame7;
