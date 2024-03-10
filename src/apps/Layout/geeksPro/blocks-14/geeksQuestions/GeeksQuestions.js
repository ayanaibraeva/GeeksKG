import React, {useEffect} from 'react';
import classes from "./GeeksQuestions.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GeeksQuestionsData from './GeeksQuestions.json';

const GeeksQuestions = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const { main_block } = GeeksQuestionsData.geeksQuestions;
    const { questions } = main_block;

    return (
        <section className={classes.GeeksQuestions}>
            <div className={classes.container}>
                <div className={classes.geeks_questions}>
                    <div className={classes.main_block} data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        {questions.map((question, index) => (
                            <div key={index} className={classes.ques_block}>
                                <p className={classes.first_p}>{question.first_p}</p>
                                <p className={classes.second_p}>{question.second_p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeeksQuestions;