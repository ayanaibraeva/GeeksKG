import React from 'react';
import classes from "./GeeksPluses.module.css";
import GeeksPlusesData from './GeeksPluses.json';
const GeeksPlusesComponent = () => {
    const { main_block } = GeeksPlusesData.geeksPluses;
    const { ques_title, table } = main_block;

    return (
        <section className={classes.geeksPluses}>
            <div className={classes.container}>
                <div className={classes.main_block}>
                    <h1 className={classes.ques_title}>{ques_title}</h1>
                    <table className={classes.table}>
                        <tbody className={classes.table_body}>
                        {table.table_body.map((row, rowIndex) => (
                            <tr key={rowIndex} className={classes.table_row}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className={classes.table_content}>
                                        <p className={classes.table_text}>{cell.table_text}</p>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default GeeksPlusesComponent;