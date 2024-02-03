import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import AnimatedItem from "../components/AnimatedItem";

const Home = () => {
  const items = [
    {
      image: "vrtist4.svg",
      title: "Titre 1",
      description:
        "Etiam imperdiet eros neque, eget hendrerit ex tempus ac. Nam sollicitudin tempus neque, feugiat feugiat orci maximus ut. Nam iaculis quam vel lacus condimentum, et vestibulum enim faucibus. Duis iaculis ac ipsum sed tincidunt. In sollicitudin felis id lorem consectetur, sed commodo augue porttitor. Nulla consectetur at libero quis convallis. Aenean commodo arcu vel dui volutpat, nec viverra lorem varius. Sed viverra magna dolor, et bibendum arcu scelerisque sit amet. Cras justo purus, ornare sed nisi nec, vulputate mollis libero. Integer quam velit, scelerisque et lacinia eget, porttitor quis metus. Etiam nec augue nec velit scelerisque aliquam et non libero. Vestibulum venenatis varius nibh in molestie.",
      video: "/ClairObscurv1.mp4",
    },
    {
      image: "vrtist3.svg",
      title: "Titre 2",
      description: "Description pour vrtist3.",
      video: "/LadressV1.mp4",
    },
    {
      image: "MOLUKI.png",
      title: "MOLUKI",
      description: "Description pour vrtist2.",
      video: "/MOLUKI.mp4",
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
