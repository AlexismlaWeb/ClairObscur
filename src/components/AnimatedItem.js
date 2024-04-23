import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../components/hook/useWindow";


const AnimatedList = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  // Ajouter un état pour suivre si l'élément a déjà été cliqué
  const [clickedItem, setClickedItem] = useState(null);
  const navigate = useNavigate();
  const display = useWindowSize()

  console.log('click',clickedItem)
  const handleItemClick = (item, index) => {
    // Si l'élément a déjà été cliqué, naviguer
    if (clickedItem === index) {
      navigate("/details", { state: { item } });
      // Réinitialiser l'état de l'élément cliqué
      setClickedItem(null);
    } else {
      // Sinon, définir cet élément comme cliqué
      setClickedItem(index);
      // Optionnel : ajouter un délai pour réinitialiser automatiquement l'état cliqué
      // pour permettre un nouveau clic après un certain temps
      // setTimeout(() => setClickedItem(null), 2000); Ajustez le délai selon les besoins
    }
  };

  return (
    <div
      className="animated-list my-2"
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
          whileHover={{ scaleY: 1.2 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => setHoveredItem(index)}
          onHoverEnd={() => {}} // Ne rien faire lorsque la souris quitte l'élément individuel
          onClick={() => display !== 'laptop' ? handleItemClick(item, index) : navigate("/details", { state: { item } })}
        >
          <img src={item.image} alt={`Item ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
