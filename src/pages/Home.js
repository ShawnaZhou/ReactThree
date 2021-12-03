import React from "react";
import style from "./home.module.css";
import Header from "../components/Header.jsx";
import gsap from "gsap";
import Moon from "../components/Moon";
import Transition from "../components/Transition";
import Part1 from "../components/Part1";
import Part2 from "../components/Part2";
const Home = () => {
  const timeline = gsap.timeline();
  return (
    <div className={style.container}>
      {/* <Transition timeline={timeline} /> */}
      <Header />
      <Moon />
      <Part1 />
      <Part2 />
    </div>
  );
};

export default Home;
