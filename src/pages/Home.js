import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import AnimatedItem from "../components/AnimatedItem";

const Home = () => {
  const items = [
    {
      image: "vrtist4.svg",
      title: "Titre 1",
      description: "Description pour vrtist4.",
    },
    {
      image: "vrtist3.svg",
      title: "Titre 2",
      description: "Description pour vrtist3.",
    },
    {
      image: "vrtist2.svg",
      title: "Titre 3",
      description: "Description pour vrtist2.",
    },
    {
      image: "vrtist1.svg",
      title: "Titre 4",
      description: "Description pour vrtist1.",
    },
  ];

  return (
    <div>
      <Header absolute={true} />
      <AnimatedItem items={items} />
      <Footer />
    </div>
  );
};

export default Home;
