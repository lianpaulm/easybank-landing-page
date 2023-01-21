import React from "react";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default App;
