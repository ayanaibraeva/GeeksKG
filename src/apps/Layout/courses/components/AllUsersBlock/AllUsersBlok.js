import { useEffect, useState } from "react";
import React from "react";
import { Col, Container } from "react-bootstrap";
import arrowImage from "./images/arrow.svg";
import users from "./AllUsers.json"
import "./AllUsers.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TitleCours/fonts/style.css';
import "./fonts/style.css"
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

function AllUsersBlock() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(users);
    }, []);


    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0, x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 }
        })
    }

    const { t } = useTranslation();

    return (
        <Container className='conteiner' fluid>
            <motion.Row className="allUser" initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>

                <Col className="groupUsersBlock" i18nIsDynamicList>

                    {courses && courses.map((course, index) => (

                        <motion.Col custom={index + 1} variants={textAnimation} xs={4} key={index} className="userBlock">

                            <div className="userBlockImage">
                                <img src={course.img_grey} alt="cours" className="gray" />
                                <img src={course.img_color} alt="cours" className="color" />
                            </div>
                            <div className="userBlockData">
                                <Trans i18nKey={`all_causes_${index + 1}.start_date`}>{t(`all_causes_${index + 1}.${course.start_date})`)}</Trans>
                            </div>


                            <h2 className="userBlockTitle mb-3">
                                <Trans i18nKey={`all_causes_${index + 1}.title`}>{t(`all_causes_${index + 1}.${course.title})`)}</Trans>
                            </h2>


                            <p className="userBlockInfo">
                                <Trans i18nKey={`all_causes_${index + 1}.description`}>{t(`all_causes_${index + 1}.${course.description})`)}</Trans>
                            </p>
                            <p className="userBlockDuration">
                                <Trans i18nKey={`all_causes_${index + 1}.duration`}>{t(`all_causes_${index + 1}.${course.duration})`)}</Trans>
                            </p>
                            <div className="userBlockBottom">
                                <p className="userBlockText">
                                    <Trans i18nKey={`all_causes_${index + 1}.buttom`}>{t(`all_causes_${index + 1}.${course.buttom})`)}</Trans>
                                </p>
                                <img className="userBlockArrow" src={arrowImage} alt="arrow" />
                            </div>

                        </motion.Col>
                    ))}
                </Col>
            </motion.Row>
        </Container >
    );
}

export default AllUsersBlock