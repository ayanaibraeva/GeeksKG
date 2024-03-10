import React from "react";
import { Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TestCours.css"
import '../TitleCours/fonts/style.css';
import "../AllUsersBlock/fonts/style.css"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function TestCours() {

    const redirect = () => {
        window.location.href = 'https://geeks.bitrix24site.ru/crm_form_lafsj/';
    }

    const textAnimation = {
        hidden: {
            y: 150,
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
        <Container className="conteiner" fluid>
            <motion.Row className="TestCoursBlock" initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }}>
                <Col sm={7} className="TestCoursBlockLeft">

                    <motion.h2 custom={1} variants={textAnimation} className="TestCoursBlockTitle">{t("courses.cours_block_test_title")}</motion.h2>
                    <motion.Button custom={2} variants={textAnimation} onClick={redirect} className="TestCoursBlockButton">
                        <span className="TestCoursBlockButtonText">{t("courses.cours_block_test_button")}</span>
                        <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </motion.Button>
                </Col>
                <Col sm={5} className="TestCoursBlockRigth">
                    <motion.img custom={3} variants={textAnimation} className="TestCoursPeople" src="https://geeks.kg/back_media/main_block/2023/06/22/6b3be227-7559-4304-aed4-02c769337c16.webp" alt="people" />
                </Col>
            </motion.Row>
        </Container >
    )
}

export default TestCours