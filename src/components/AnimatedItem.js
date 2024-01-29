import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedList = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

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
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
