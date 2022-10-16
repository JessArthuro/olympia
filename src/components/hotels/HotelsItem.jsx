import { AiTwotoneHeart } from "react-icons/ai";
import BtnPrimary from "../btn_primary/BtnPrimary";
import { TbRoute } from "react-icons/tb";
import style from "./hotels.module.scss";

const {
  hotels_item,
  hotel_image,
  heart_button,
  hotel_name,
  hotel_price,
  hotel_buttons,
  route_button,
} = style;

function HotelsItem({ item }) {
  return (
    <div className={hotels_item}>
      <img className={hotel_image} src={item.image} alt={item.name} />
      <button className={heart_button}>
        <AiTwotoneHeart />
      </button>

      <h4 className={hotel_name}>{item.name}</h4>
      <p className={hotel_price}>Start from ${item.price}/night</p>

      <div className={hotel_buttons}>
        <BtnPrimary isBtnHotel={true} title="book now" />
        <button className={route_button}>
          <TbRoute />
        </button>
      </div>
    </div>
  );
}

export default HotelsItem;
