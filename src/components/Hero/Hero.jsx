import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BtnPrimary from "../btn-primary/BtnPrimary";
import { AiFillPlayCircle } from "react-icons/ai";
import style from "./hero.module.scss";
import ItemCarousel from "./ItemCarousel";

const {
  hero_section,
  hero_information,
  hero_title,
  hero_description,
  hero_subtitle,
  hero_buttons,
  btn_video,
  icon_play,
  hero_carousel,
  slide,
} = style;

function Hero() {
  return (
    <section className={hero_section}>
      <div className={`${hero_information} container`}>
        <h1 className={hero_title}>
          discover the best hotels & resorts to stay
        </h1>
        <div className={hero_description}>
          <p className={hero_subtitle}>
            We provide a variety of the best lodging accommodations for those of
            you who need it. Don't worry about the quality of the service.
          </p>

          <div className={hero_buttons}>
            <BtnPrimary title="explore more" />
            <button className={btn_video}>
              <AiFillPlayCircle className={icon_play} />
              play demo
            </button>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        // La propiedad centeredSlidesBounds centrara la diapositiva activa sin agregar espacios al principio y final del control deslizante.
        centeredSlidesBounds={true}
        className={hero_carousel}
      >
        {/* Slide Home #1 */}
        <SwiperSlide className={slide}>
          <ItemCarousel namehotel="yellowstar hotel jimbaran" imgnumber={1} />
        </SwiperSlide>
        {/* Slide Home #2 */}
        <SwiperSlide className={slide}>
          <ItemCarousel namehotel="java heritage hotel" imgnumber={2} />
        </SwiperSlide>
        {/* Slide Home #3 */}
        <SwiperSlide className={slide}>
          <ItemCarousel namehotel="nihi sumba resort" imgnumber={3} />
        </SwiperSlide>
        {/* Slide Home #4 */}
        <SwiperSlide className={slide}>
          <ItemCarousel namehotel="bobocabin kintamani" imgnumber={4} />
        </SwiperSlide>
        {/* Slide Home #5 */}
        <SwiperSlide className={slide}>
          <ItemCarousel namehotel="java heritage hotel" imgnumber={5} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
