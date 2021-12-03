import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styles from "./moon.module.css";
import earthtexture from "../public/images/earth.jpg";
import moontexture from "../public/images/TJrbaRE.jpg";
import suntexture from "../public/images/sun.jpg";

function Scene(props) {
  const [endFir, setEndFir] = useState(0);
  const [endSec, setEenSec] = useState(0);
  const [endThir, setEndThir] = useState(0);

  const moon = useRef(null);
  const earth = useRef(null);
  const sun = useRef(null);

  useFrame(({ clock }) => {
    moon.current.rotation.x = clock.getElapsedTime() / 15;
    moon.current.rotation.y += 0.001;
    moon.current.rotation.z += 0.01;
    earth.current.rotation.x = clock.getElapsedTime() / 20;
    earth.current.rotation.y += 0.001;
    earth.current.rotation.z += 0.01;
    sun.current.rotation.x = clock.getElapsedTime() / 30;
    sun.current.rotation.y += 0.001;
    sun.current.rotation.z += 0.01;
  });

  // const throttle = (func, timing) => {
  //   let timer = null;
  //   return function(){
  //     if(timer){
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(func,timing);
  //   }
  // };
  // document.addEventListener("scroll", () => {
  //   throttle(scrolling, 5000);
  // });
  // const scrolling = () => {
  //   let t = document.body.scrollHeight;
  //   setZoom((prev) => prev - t/10000);
  //   console.log("scroll", zoom);
  // };
  const moonMap = useLoader(TextureLoader, moontexture);
  const earthMap = useLoader(TextureLoader, earthtexture);
  const sunMap = useLoader(TextureLoader, suntexture);
  const refCamera = useRef(null);

  useFrame(() => {
    const t = window.scrollY;
    // if (window.scrollY < window.innerHeight) {
      refCamera.current.position.z = t * 0.01;
      refCamera.current.position.x = t * -0.01;
      refCamera.current.position.y = t * 0.0002;
      setEndFir(t);
    // } 
  });

  // useFrame(() => {
  //   let t = window.scrollY;
  //   if (window.scrollY >= window.innerHeight * 2) {
  //     console.log(endFir);
  //     refCamera.current.position.z = t * 0.01;
  //     refCamera.current.position.x = t * -0.02;
  //     refCamera.current.position.y = t * 0.002;
  //   }
  // });

  return (
    <>
      <Stars />
      <ambientLight color="#f5f5f5" intensity={0.5} />
      <directionalLight position={[-10, 0, 0]} color="yellow" intensity={0.5} />
      <PerspectiveCamera zoom={1} ref={refCamera} makeDefault {...props} />
      <mesh position={[0, 0, -5]} ref={moon}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.2} map={moonMap} />
      </mesh>
      <mesh position={[-15, 0, -6]} ref={earth}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial displacementScale={0.2} map={earthMap} />
      </mesh>
      <mesh position={[-55, 0, -6]} ref={sun}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial displacementScale={0.2} map={sunMap} />
      </mesh>
    </>
  );
}

export default function Moon() {
  return (
    <Canvas className={styles.Moon}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
