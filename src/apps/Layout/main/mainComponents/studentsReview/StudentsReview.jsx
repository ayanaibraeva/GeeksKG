import React from 'react'
import classes from './studentsReview.module.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import { ReactComponent as BlackArrowRight } from '../icons/blackArrowRight.svg';
import { ReactComponent as BlackArrowLeft } from '../icons/blackArrowLeft.svg';


function ReviewSlider({ slides }) {
    return (
        <div className={classes.sliderContainer}>
            <div className={classes.containerTitle}>
                <p className={classes.title}>Отзывы студентов</p>
            </div>
            <div className={classes.sliderInner}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={2.98616}
                    navigation={{
                        nextEl: `.${classes.swiperButtonNext}`,
                        prevEl: `.${classes.swiperButtonPrev}`
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={classes.swiperSlide}>
                        <div className={classes.reviewSlide}>
                            <iframe style={{width: "100%", height: "300px"}} src={slide.src} rel='nofollow' allowFullScreen loading='lazy' className={classes.reviewIframe}></iframe>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={classes.buttonArrangement}>
                <div className={classes.buttonSwiper}>
                    <button className={classes.swiperButtonPrev}>
                        <BlackArrowLeft/>
                    </button>
                    <button className={classes.swiperButtonNext} >
                        <BlackArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider