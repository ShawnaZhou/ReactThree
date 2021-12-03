import React from "react";
import { Link } from "react-router-dom";
import styles from "./err.module.css";

const Err = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.ctnchild1}>4</span>
        <span className={styles.ctnchild2}>0</span>
        <span className={styles.ctnchild1}>4</span>
      </div>
      <div className={styles.helper}>
        <Link to='/home'>
          <h3>HOME</h3>
        </Link>
      </div>
    </div>
  );
};

export default Err;
