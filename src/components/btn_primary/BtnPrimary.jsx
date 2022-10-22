import style from "./btn_primary.module.scss";

function BtnPrimary({ isSignUp, isBtnHotel, isBtnFooter, title }) {
  return (
    <button
      className={`${style.btn_primary} ${isSignUp ? `${style.sign_up}` : ""} ${
        isBtnHotel ? `${style.btn_hotel}` : ""
      } ${isBtnFooter ? `${style.btn_footer}` : ""}`}
    >
      {title}
    </button>
  );
}

export default BtnPrimary;
