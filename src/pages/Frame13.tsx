import { FunctionComponent } from "react";
import styles from "./Frame13.module.css";

const Frame13: FunctionComponent = () => {
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
      <b className={styles.github}>GitHub</b>
      <i className={styles.hereWillBe}>
        here will be information about us and useful links
      </i>
      <b className={styles.hereWillBeContainer}>
        <p className={styles.comeOnWho}>Here will be joke question)</p>
        <p className={styles.comeOnWho}>
          Come on, who will be ask something about sequent calculus. No one uses
          them)
        </p>
      </b>
      <b className={styles.hereIAm}>
        here i am gonna add books, videos, and some useful resources
      </b>
      <b className={styles.hereIAdd}>
        here i add issue, where user can solved i learn sequent calculus
      </b>
      <b className={styles.hereWillBe2}>
        here will be some example , explanationand guide of using sequent
        calculus
      </b>
      <b className={styles.hereWillLonely}>
        here will lonely calculator, where user can solve his own issue and also
        make predictions by switching between modes of vizualizate entire tree
        and make prediction
      </b>
    </div>
  );
};

export default Frame13;
