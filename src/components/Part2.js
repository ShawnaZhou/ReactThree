import React, { useRef, useEffect } from "react";
import styles from "./Part2.module.css";
import gsap, { Power1 } from "gsap";

function Part2() {

    const ref = useRef(null);
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        start: "right bottom",
        end: "+=500",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 1 },
          delay: 0.2,
          ease: Power1.easeIn,
        },
      },
    });
    tl.addLabel("start")
      .from(ref.current, {
        scale: 0.5,
        rotation: 45,
        autoAlpha: 1,
      })
      .addLabel("mid")
      .from(ref.current, {
        left: 3,
        autoAlpha: 1,
      })
      .addLabel("end");


  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.content}>
        <h1>Earth!</h1>
        <h2>Story is going on...</h2>
      </div>
    </div>
  );
}

export default Part2;
