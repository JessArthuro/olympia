import style from "./features.module.scss";

const {
  feature_qualification,
  qualification_image,
  qualification_name,
  qualification_details,
  qualification_punctuation,
} = style;

function FeatureQualification({ imgname, name, punctuation }) {
  return (
    <div className={feature_qualification}>
      <img
        className={qualification_image}
        src={require(`../../img/testimonials/${imgname}.jpg`)}
        alt="face portrait"
      />
      <div>
        <h4 className={qualification_name}>{name}</h4>
        <p className={qualification_details}>
          Give rating <span className={qualification_punctuation}>{punctuation}</span>
        </p>
      </div>
    </div>
  );
}

export default FeatureQualification;