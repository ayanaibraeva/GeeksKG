import React from 'react'
import classes from './studentsGraduates.module.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import { ReactComponent as WhiteArrowRight } from '../icons/whiteArrowRight.svg'
import { ReactComponent as WhiteArrowLeft } from '../icons/whiteArrowLeft.svg'
import {motion} from 'framer-motion'
import {forwardRef} from 'react'


export const StudentsGraduatesItem = forwardRef(({ slides }, ref) => {
    return (
        <div className={classes.sliderContainer}>
            <div className={classes.containerTitle}>
                <p className={classes.title}>Наши выпускники</p>
            </div>
            <div ref={ref} className={classes.sliderInner}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={90}
                    slidesPerView={3}
                    navigation={{
                    nextEl: `.${classes.swiperButtonNext}`,
                    prevEl: `.${classes.swiperButtonPrev}`
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={classes.person}>
                                <div className={classes.mainInfo}>
                                    <div className={classes.imgWrapper}>
                                        <div className={classes.img}>
                                            <img src={slide.img} alt={slide.name}/>
                                        </div>
                                        <div className={classes.imgSquare}></div>
                                    </div>
                                    <div className={classes.studentNamePosition}>
                                        <span className={classes.nameInfo}>
                                            {slide.name}
                                            <br />
                                            {slide.age}
                                        </span>
                                        <p className={classes.positionInfo}>{slide.position}</p>
                                    </div>
                                </div>
                                <p className={classes.subtitle}>
                                    {slide.subtitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={classes.buttonArrangement}>
                    <div className={classes.buttonSwiper}>
                        <button className={classes.swiperButtonPrev}>
                            <WhiteArrowLeft/>
                        </button>
                        <button className={classes.swiperButtonNext} >
                            <WhiteArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
})

export const MStudentsGraduatesItem = motion(StudentsGraduatesItem)