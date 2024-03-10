import React, {useRef} from 'react';
import classes from "./GeeksCompanies.module.css";
import arrowLeft from "../img/arrows/arrow-left.svg"
import arrowRight from "../img/arrows/arrow-right.svg"
import SliderSlick from "./Slider";

function GeeksCompanies() {

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section className={classes.GeeksCompanies}>
            <div className={classes.container}>
                <div className={classes.companies_wrap}>
                    <div className={classes.title_button}>
                        <p className={classes.partners}>наши партнеры</p>
                        <div className={classes.slider_button}>
                            <button className={classes.arrow_button} id={'prevBtn'} onClick={previous}>
                                <img src={arrowLeft} alt={'ArrowLeft'}></img>
                            </button>
                            <button className={classes.arrow_button} id={'nextBtn'} onClick={next} >
                                <img src={arrowRight} alt={'ArrowRight'}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.slider_container}>
                <div className={classes.slider_wrap}>
                    <div className={classes.slider}>
                        <SliderSlick sliderRef={sliderRef} next={next} previous={previous}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GeeksCompanies;

