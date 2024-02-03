import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AnimatedList = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const HandleClickSeeMore = (item) => {
    if (Object.keys(item).length > 0) {
      navigate("/details", { state: { item } });
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="animated-list"
      onMouseLeave={() => setHoveredItem(null)} // Réinitialiser hoveredItem lorsque la souris quitte la liste
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`list-item ${
            hoveredItem !== null &&
            (hoveredItem === index
              ? "active"
              : index === hoveredItem - 1
              ? "previous"
              : index === hoveredItem + 1
              ? "next"
              : "inactive")
          }`}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          onClick={() => setHoveredItem(index)}
          onHoverStart={() => setHoveredItem(index)}
          onHoverEnd={() => {}} // Ne rien faire lorsque la souris quitte l'élément individuel
        >
          <img src={item.image} alt={`Item ${index + 1}`} />
          {hoveredItem === index && (
            <div className="text-overlay">
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>{/* <p>{item.description}</p> */}</div>
              <div
                className="voir_plus"
                onClick={() => HandleClickSeeMore(item)}
              >
                Voir plus
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
