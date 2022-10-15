import style from "./features.module.scss";
const { features_item, indicator_number, item_title, item_info } = style;

function FeaturesItem({ item }) {
  return (
    <div className={features_item}>
      <span className={indicator_number}>{item.number}</span>
      <h3 className={item_title}>{item.title}</h3>
      <p className={item_info}>{item.info}</p>
    </div>
  )
}

export default FeaturesItem;