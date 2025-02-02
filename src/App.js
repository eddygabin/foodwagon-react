import React from "react";
import FoodNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodList from "./components/FoodList";

const App = () => {
  return (
    <>
      <FoodNavbar />
      <Hero />
      <FoodList />
    </>
  );
};

export default App;