import React from 'react'
import classes from './workGraduates.module.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import { ReactComponent as WhiteArrowRight } from '../icons/whiteArrowRight.svg'
import { ReactComponent as WhiteArrowLeft } from '../icons/whiteArrowLeft.svg'
import { ReactComponent as BlackArrowRight } from '../icons/blackArrowRight.svg'


function WorkSlider({ slides }) {
    return (
        <div className={classes.sliderContainer}>
            <div className={classes.containerTitle}>
                <p className={classes.title}>Выпускные работы студентов</p>
            </div>
            <div className={classes.sliderInner}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2.69}
                    navigation={{
                    nextEl: `.${classes.swiperButtonNext}`,
                    prevEl: `.${classes.swiperButtonPrev}`
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <img
                                src={slide.img}
                                alt={slide.alt}
                                className={classes.workImg}
                            />
                            <div className={classes.workInfo}>
                                <p className={classes.workTitle}>{slide.title}</p>
                                <p className={classes.workSubtitle}>{slide.subtitle}</p>
                            </div>
                            <button className={classes.linkBtn}>
                                <a 
                                href={slide.link} 
                                target='_blank' 
                                className={classes.link}
                                >
                                Перейти
                                <BlackArrowRight/>
                                </a>
                            </button>
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
}

export default WorkSlider

// const SwiperNavButton = () => {

//     return (
//         <div>
            
//         </div>
//     )
// }