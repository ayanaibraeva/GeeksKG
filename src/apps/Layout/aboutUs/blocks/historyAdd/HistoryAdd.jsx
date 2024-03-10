import React from "react";
import { motion } from "framer-motion";
import Content from "./contentHistory.json";
import '../historyAdd/historyAddStyle.css'; // Assuming this is still needed

const TextAnimation = {
  hidden: {
    y: 120,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const HistoryAddBlock = ({ item }) => (
  <motion.div key={item.id} variants={TextAnimation} className={item.name}>
    {item.content && <p>{item.content}</p>}
    {item.image && <img src={item.image} alt="" />}
  </motion.div>
);

const HistoryAdd = () => {
  const filteredContent = Content.filter((item) => item.content || item.image);

  return (
    <motion.section
      className="history"
      initial="hidden"
      whileInView="visible"
      variants={TextAnimation}
    >
      <div className="container">
        <div className="history__contents">
          <motion.h2 variants={TextAnimation}>ИСТОРИЯ СОЗДАНИЯ</motion.h2>
          <div className="content">
            {filteredContent.map((item) => (
              <HistoryAddBlock key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HistoryAdd;
