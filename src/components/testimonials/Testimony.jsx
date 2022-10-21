import { RiDoubleQuotesL } from "react-icons/ri";
import style from "./testimonials.module.scss";

const {
  testimony_content,
  quotes_icon,
  testimony_description,
  testimony_details,
  testimony_author,
  author_name,
  author_country,
  testimony_image
} = style;

function Testimony({ item }) {
  return (
    <div className={testimony_content}>
      <RiDoubleQuotesL className={quotes_icon} />
      <p className={testimony_description}>{item.comment}</p>

      <div className={testimony_details}>
        <div className={testimony_author}>
          <h5 className={author_name}>{item.name}</h5>
          <span className={author_country}>{item.country}</span>
        </div>

        <img
          className={testimony_image}
          src={item.image}
          alt={`${item.name} photography`}
        />
      </div>
    </div>
  );
}

export default Testimony;
