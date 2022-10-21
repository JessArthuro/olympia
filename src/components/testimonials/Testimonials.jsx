import TestimonialsBtn from "./TestimonialsBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { TestimonyData } from "./TestimonialsData";
import Testimony from "./Testimony";
import style from "./testimonials.module.scss";

const {
  testimonials_section,
  testimonials_info,
  testimonials_title,
  testimonials_description,
  testimonials_subtitle,
  testimonials_buttons,
  testimonials_swiper,
} = style;

function Testimonials() {
  return (
    <section className={testimonials_section}>
      <div className="container">
        {/* Titulos de Testimonios y botones de navegacion del Slider */}
        <div className={testimonials_info}>
          <h2 className={testimonials_title}>
            what our customers say about olympia?
          </h2>
          <div className={testimonials_description}>
            <p className={testimonials_subtitle}>
              If you don't trust us enough, take a look at the reviews from some
              of our users below. We hope it can help you in making your
              decision.
            </p>

            <div className={testimonials_buttons}>
              <TestimonialsBtn isPrev={true} />
              <TestimonialsBtn />
            </div>
          </div>
        </div>

        {/* Slider de Testimonios */}
        <Swiper
          spaceBetween={30}
          speed={700}
          grabCursor={true}
          navigation={{
            prevEl: "#prevTestimony",
            nextEl: "#nextTestimony",
          }}
          breakpoints={{
            990: {
              slidesPerView: 3
            },
            680: {
              slidesPerView: 2
            }
          }}
          modules={[Navigation]}
          className={testimonials_swiper}
        >
          {TestimonyData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Testimony item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
