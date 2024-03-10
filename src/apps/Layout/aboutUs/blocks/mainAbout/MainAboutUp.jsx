import React from "react";
import {motion} from "framer-motion";
import './mainAbout.css'

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
            repeat: 0,
        }
    },
};

export const MainAboutUp = () => {
    return (
        <motion.section
            className="main"
            initial="hidden"
            whileInView="visible"
            variants={TextAnimation}>
            <div className="container">
                <div className="main__contents">
                    <div className="title"
                         variants={TextAnimation}>
                        <motion.h1 variants={TextAnimation}>НАША МИССИЯ</motion.h1>
                        <motion.p variants={TextAnimation}>МЫ СОЗДАЕМ ЭКОСИСТЕМУ ДЛЯ ОБУЧЕНИЯ,  РАБОТЫ И ТВОРЧЕСТВА IT-СПЕЦИАЛИСТОВ</motion.p>
                    </div>
                    <img variants={TextAnimation} src="https://geeks.kg/back_media/general/2023/09/18/b0bbc9cb-07b3-4e61-a109-36489399f269.png" alt=""/>
                </div>
            </div>
        </motion.section>
    )
}
export default MainAboutUp