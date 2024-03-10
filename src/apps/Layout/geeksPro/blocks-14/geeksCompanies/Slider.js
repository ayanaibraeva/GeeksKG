import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from './SliderImg.json';
import classes from "./Slider.module.css";

const SliderSlick= ({ sliderRef, next, previous }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode:true,
        variableWidth: true,
        centerPadding: '-8px',
    };

    return (
        <div >
            <Slider className={classes.slider} ref={sliderRef} {...settings}>
                {images.map((image) => (
                    <a href={image.link} key={image.id} className={classes.image_container} target="_blank">
                        <img src={image.src} alt={image.alt} />
                    </a>
                ))}
            </Slider>
        </div>
    );
}
export default SliderSlick;
