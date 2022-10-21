import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import style from "./testimonials.module.scss";

function TestimonialsBtn({ isPrev }) {
  return (
    <button
      className={`${style.testimonials_btn} ${
        isPrev ? `${style.prev_btn}` : ""
      }`}
      id={isPrev ? "prevTestimony" : "nextTestimony"}
    >
      {isPrev ? <BsArrowLeft /> : <BsArrowRight />}
    </button>
  );
}

export default TestimonialsBtn;
