import React from 'react';
import classes from "./GeeksResume.module.css";
import {useEffect} from "react";

const GeeksResumePage = ({handleShow}) => {
    const CloseBtn = ({ action, text }) => {
        return (
            <button className={classes.close_btn} onClick={action}>{text}</button>
        );
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.signIn_wrap}>
                    <h1 className={classes.signIn_title}>банк резюме</h1>
                    <form className={classes.signIn_form}>
                        <input
                            type="text"
                            placeholder="Логин"
                            name="login"
                            className={classes.signIn_input}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            className={classes.signIn_input}
                        />
                        <button className={classes.btn_enter}>
                            <span
                                className={classes.signIn_enter}>войти
                            </span>
                        </button>
                    </form>
                    <CloseBtn text={'Закрыть'} action={handleShow}/>
                </div>
            </div>

        </>
    );
};

export default GeeksResumePage;




