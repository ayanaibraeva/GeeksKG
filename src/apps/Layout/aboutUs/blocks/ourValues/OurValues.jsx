import React from "react";
import "../ourValues/ourValuesStyle.css";
import content from "../ourValues/contentOurValues.json";
import { motion } from "framer-motion";

const blockAnimation = {
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
            repeat: 0,
        },
    },
};

const OurValuesBlock = ({ item }) => (
    <td key={item.id}>
        <motion.div className="block"
                    initial="hidden"
                    whileInView="visible"
                    variants={blockAnimation}
                    whileHover={{ height: "100%", transition: "200ms" }}>
            <div className="titleOurValues">
                <img src={item.imageTitleValues} alt="" />
                <h3>{item.titleValues}</h3>
            </div>
            <p>{item.contentValues}</p>
        </motion.div>
    </td>
);

export const OurValues = () => {
    return (
        <motion.section className="OurValues">
            <div className="container">
                <div className="OurValues__content">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={blockAnimation}>НАШИ ЦЕННОСТИ</motion.h2>
                    <div className="blocks">
                        {content.map((item) => (
                            <OurValuesBlock item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default OurValues;
