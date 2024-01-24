import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedList = ({ items }) => {

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="animated-list">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`list-item ${hoveredItem === index ? 'active' : ''}`}
          whileHover={{ scale: 1 }}
          onHoverStart={() => setHoveredItem(index)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <img src={item} alt={`Item ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
