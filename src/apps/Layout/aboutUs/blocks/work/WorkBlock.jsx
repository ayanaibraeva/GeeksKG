import React from "react";
import "./work.style.css";
import Work from './WorkJson.json'
import { motion } from "framer-motion";

const workAnimation = {
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
    }
};

const WorkContentJson = ({item}) => (
    <motion.div key={item}
                initial="hidden"
                whileInView="visible"
                variants={workAnimation}
                className="workBlock">
        <div className="titleWork">
            <img src={item.imageTitleWork} alt=""/>
            <h3>{item.titleWork}</h3>
        </div>
        <p>{item.contentWork}</p>
    </motion.div>
)

const WorkBlock = () => {
    return (
        <section className="WorkSection">
            <div className="container">
                <div className="WorkSection__content">
                    <h2 variants={workAnimation}>НАШИ ЦЕННОСТИ</h2>
                    <div className="workBlocks">
                        {Work.map((item) => (
                            <WorkContentJson key={item.id } item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkBlock;