import SectionTitle from "../section_title/SectionTitle";
import style from "./features.module.scss";
import { FeatureData } from "./FeatureData";
import FeaturesItem from "./FeaturesItem";
import FeatureQualification from "./FeatureQualification";

function Features() {
  return (
    <section className={style.features_section} id="features">
      <SectionTitle
        title="why you should choose us"
        description="You should choose us because we provide the best accommodation and we have sorted all the hotels here based on their quality."
      />

      <div className={`${style.features_grid} container`}>
        {/* Contenedor de la informacion de las caracteristicas */}
        <div className={style.features_text}>
          {FeatureData.map((item) => {
            return <FeaturesItem item={item} key={item.id} />;
          })}
        </div>

        {/* Contenedor de las imagenes de caracteristicas */}
        <div className={style.features_pictures}>
          <img
            className={style.features_img1}
            src={require("../../img/features.jpg")}
            alt="A pool with several sun loungers and two tress"
          />
          <img
            className={style.features_img2}
            src={require("../../img/features2.jpg")}
            alt="hotel room with sea view"
          />

          <FeatureQualification
            imgname="men4"
            name="vincent rompies"
            punctuation="4.7"
          />

          <FeatureQualification
            imgname="men2"
            name="caesar mario"
            punctuation="4.5"
          />

          <FeatureQualification
            imgname="woman1"
            name="jasmine nadiko"
            punctuation="4.7"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
