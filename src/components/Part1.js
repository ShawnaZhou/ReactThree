import React from "react";
import styles from "./Part1.module.css";
function Part1() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Hi! </h1>
        <h2>This is Moon!</h2>
        <h3>Let the story begin ...</h3>
        <button className={styles.p1Btn}>ABOUT ME</button>
      </div>
    </div>
  );
}

export default Part1;
