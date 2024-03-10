import React from 'react';
import { Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TitleCourse.css';
import '../TitleCours/fonts/style.css';
import "../AllUsersBlock/fonts/style.css";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


function TitleCours() {

    const textAnimation = {
        hidden: {
            y: 250,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.25 }
        })
    }

    const { t } = useTranslation();

    return (
        <Container className='conteiner' fluid>

            <motion.Row initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                <Col className='titleBlockCol'>
                    <motion.hr />
                    <motion.h1 custom={1} variants={textAnimation}
                        className='titleCours'>{t('courses.cours_block_title')}<span className='titleCoursIn'> {t('courses.cours_block_title_end')}</span></motion.h1>
                    <motion.p custom={2} variants={textAnimation}
                        className='postTitleCours'>{t('courses.cours_block_post_title')}</motion.p>
                </Col>
            </motion.Row>


            <motion.Row initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className='showContent'>
                <Col xs={12} className='showBlock'>
                    {[...Array(15)].map((index) => (
                        <motion.p custom={3} variants={textAnimation} key={index} className="showTextCours">{t("courses.cours_block_animation_text")}</motion.p>
                    ))}
                </Col>

                <Col xs={12} md={8} className='showBlock'>
                    {[...Array(15)].map((index) => (
                        <motion.p custom={4} variants={textAnimation} key={index} className="showTextCoursBottom">{t("courses.cours_block_animation_text")}</motion.p>
                    ))}
                </Col>

            </motion.Row>
        </Container>
    );
}

export default TitleCours;