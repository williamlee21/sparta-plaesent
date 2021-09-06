import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MasonryGrid from "./components/MasonryGrid";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sortData = async () => {
      let data = await axios
        .get(
          "https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge"
        )
        .then((res) => res.data);

      data.cards.sort((a, b) => new Date(b.date) - new Date(a.date));

      setData(data);
    };

    sortData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Header />
      <Carousel hero_slides={data.hero_slides} hero_text={data.hero_text} />
      <MasonryGrid cards={data.cards} />
      <Footer />
    </div>
  );
}

export default App;
