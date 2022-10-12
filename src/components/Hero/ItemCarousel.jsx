import style from "./hero.module.scss";

function ItemCarousel({ namehotel, imgnumber }) {
  return (
    <div className={style.item_carousel}>
      <h4 className={style.name_hotel}>{namehotel}</h4>
      <span className={style.price_hotel}>Start from $1,098/night</span>
      <img className={style.img_hotel} src={require(`../../img/hero/hotel${imgnumber}.jpg`)} alt={namehotel} />
    </div>
  )
}

export default ItemCarousel;