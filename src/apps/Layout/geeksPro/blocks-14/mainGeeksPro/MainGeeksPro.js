import React, { useState } from 'react';
import classes from "./GeeksPro.module.css";
import geeksWorker from '../img/geeksPro/worker.png'
import NumberCounter from './GeeksProStatistics';
import GeeksResumePage from "../geeksResume/GeeksResumePage";
function MainGeeksPro() {
    const Btn = ({ action, text }) => {
        return (
            <button className={classes.enter_btn} onClick={action}>{text}</button>
        );
    }

    const [ show, setShow ] = useState(false);
    const handleShow = () => setShow(!show);

    const counters = [
        { start: 0, end: 51, text: 'трудоустроенных студентов' },
        { start: 0, end: 68, text: 'выпускников проходят стажировку' },
        { start: 0, end: 320, text: 'выпускников закончили стажировку' },
        { start: 0, end: 22, text: 'компаний заключили с нами партнерское соглашение' },
    ];

    return (
        <section className={classes.MainGeeksPro}>
            <div className={classes.container}>
                <div className={classes.geeks_content}>
                    <div className={classes.geeks_text}>
                        <h1 className={classes.main_title}>GEEKS PRO</h1>
                        <p className={classes.main_p}>
                            <p className={classes.first_p}>ИЗУЧАЙТЕ IT И СТАНЬТЕ ЭКСПЕРТОМ В СВОЕЙ ОБЛАСТИ</p>
                            <p className={classes.second_p}>
                                В БАНКЕ
                                <span> 70 </span>
                                РЕЗЮМЕ
                            </p>
                        </p>
                        <a href>
                            <button>
                                {
                                    show &&
                                    <GeeksResumePage
                                        handleShow={handleShow}
                                    >
                                    </GeeksResumePage>
                                }
                                <Btn action={handleShow} text={'ВОЙТИ В БАНК РЕЗЮМЕ'}/>
                            </button>
                        </a>
                    </div>
                    <div className={classes.geeks_img}>
                        <img src={geeksWorker} alt="GeeksPro" />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.geeks_statistics}>
                        <ul className={classes.main_list}>
                            {counters.map((counter, index) => (
                                <li key={index} className={classes.stat_list}>
                                    <NumberCounter start={counter.start} end={counter.end} text={counter.text} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainGeeksPro;




