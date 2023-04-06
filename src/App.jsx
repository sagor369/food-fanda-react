import { useState } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  const foodData = useLoaderData();
  console.log(foodData)


  return (
    <div className="App">
      <Header></Header>
      <Products data = {foodData.categories}></Products>

    </div>
  );
}

export default App;
