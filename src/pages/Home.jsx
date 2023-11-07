import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import Career from "../components/Career";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Career />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
