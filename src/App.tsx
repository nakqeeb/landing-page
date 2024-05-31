import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlighted from "./components/Highlighted/Highlighted";
import HighlightedCTA from "./components/HighlightedCTA/HighlightedCTA";
import LogoBar from "./components/LogoBar/LogoBar";
import Metrics from "./components/Metrics/Metrics";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  const [isTop, setIsTop] = useState(true);
  const [position, setPsition] = useState(1);
  useEffect(() => {
    function updatePosition() {
      setPsition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    setIsTop(position === 0);
  }, [position]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Header />
      <Hero />
      <LogoBar />
      <Features />
      <Metrics />
      <Highlighted />
      <Testimonials />
      <Pricing />
      <Team />
      <HighlightedCTA />
      <Contact />
      <Footer />
      {!isTop && (
        <FontAwesomeIcon
          className="scroll-btn"
          onClick={scrollToTop}
          icon={faAnglesUp}
        />
      )}
    </>
  );
}

export default App;
