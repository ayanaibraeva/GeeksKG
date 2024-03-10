import React from 'react';
import 'react-redux'
import classes from './main.module.css'
import "./main.module.css"
import { mainData } from './data'
import { MStudentsGraduatesItem } from './mainComponents/studentsGraduates/StudentsGraduatesItem';
import WorkSlider from './mainComponents/workGraduates/WorkGraduates';
import ReviewSlider from './mainComponents/studentsReview/StudentsReview';
import { ReactComponent as BlackArrowRight } from '../main/mainComponents/icons/blackArrowRight.svg'
import { ContactsBox, Mapbox } from './mainComponents/contactsMap/ContactsMap';
import { motion } from "framer-motion";
// import classes from "*.module.css";


const Main = () => {
    const TextAnimation = {
        hidden: {
            y: 80,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: custom * 0.1
            },
        }),
    }
    return (
        <div>
            <div className={classes.centerMain}>
                <div className={classes.upperImg}>
                    <img src="https://geeks.kg/back_media/main_block/2023/06/22/96425634-e4e2-44ae-8f86-243519f735f3.webp" />
                </div>
                <div className={classes.mainContainer}>
                    <div className={classes.centerWrapper}>
                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={TextAnimation}
                            className={classes.images}
                        >
                            <img className={classes.leftImg} src='https://geeks.kg/back_media/main_block/2023/06/22/e775ccf8-e496-4e01-9bfb-dc53073d3700.webp' />
                            <div className={classes.shadowImg}></div>
                        </motion.div>
                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={TextAnimation}
                            className={classes.center_center}
                        >
                            <p className={classes.centerTitle}>Курсы программирования Бишкек</p>
                            <p className={classes.centerSubtitle}>Образовательный центр Geeks (Гикс) был основан Fullstack-разработчиком Айдаром Бакировым и Android-разработчиком Нургазы Сулаймановым в 2018-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию. В данный момент более 1200 студентов в возрасте от 12 до 45 лет изучают здесь программирование, дизайн и английский язык. Филиальная сеть образовательного центра представлена в таких городах, как Бишкек, Ош и Кара-Балта.</p>
                            <a href='/aboutUs'>
                                <button className={classes.centerButton}>
                                    Подробнее о нас
                                </button>
                            </a>
                        </motion.div>
                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={TextAnimation}
                            className={classes.images}
                        >
                            <img className={classes.rightImg} src='https://geeks.kg/back_media/main_block/2023/06/22/6f29146d-3631-4018-9ab6-762728cb9780.webp' />
                            <div className={classes.shadowImg}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={classes.studentGraduates}>
                <MStudentsGraduatesItem
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    variants={TextAnimation}
                    slides={mainData.graduateSlides} />
            </div>
            <div className={classes.workGraduates}>
                <WorkSlider slides={mainData.workSlides} />
            </div>
            <div className={classes.studentsReview}>
                <div className={classes.reviewWrapper}>
                    <ReviewSlider slides={mainData.reviewsSlides} />
                </div>
            </div>
            <div className={classes.completeTest}>
                <div className={classes.mainContainer}>
                    <div className={classes.testWrapper}>
                        <div className={classes.testText}>
                            <p className={classes.testTitle}>Пройдите тест чтобы определиться с направлением</p>
                            <a className={classes.testLink} href="" target='_blank'>
                                Пройти тест
                                <BlackArrowRight />
                            </a>
                        </div>
                        <img className={classes.testImg} src="https://geeks.kg/back_media/main_block/2023/06/22/6b3be227-7559-4304-aed4-02c769337c16.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className={classes.contactsWrapper}>
                <div className={classes.mainContainer}>
                    <div className={classes.contactsContent}>
                        <ContactsBox />
                        <Mapbox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;