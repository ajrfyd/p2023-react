import React from "react";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Skip from "../components/Skip";
import Site from "../components/Site";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Port from "../components/Port";
import Header from "../components/Header";

const HomeView = () => {

  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>  
      <Footer/>
    </>
  )
}

export default HomeView;