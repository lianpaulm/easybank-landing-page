import React from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <Articles />
    </>
  );
};

export default App;
