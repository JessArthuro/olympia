import BtnPrimary from "../BtnPrimary/BtnPrimary";
import { AiFillPlayCircle } from "react-icons/ai";
import style from "./Hero.module.scss";

const { hero_section, hero_information, hero_title, hero_description, hero_subtitle, hero_buttons, btn_video, icon_play } = style;

function Hero() {
  return (
    <section className={hero_section}>
      <div className={`${hero_information} container`}>
        <h1 className={hero_title}>discover the best hotels & resorts to stay</h1>
        <div className={hero_description}>
          <p className={hero_subtitle}>We provide a variety of the best lodging accommodations for those of you who need it. Don't worry about the quality of the service.</p>

          <div className={hero_buttons}>
            <BtnPrimary title="explore more" />
            <button className={btn_video}><AiFillPlayCircle className={icon_play} />play demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;