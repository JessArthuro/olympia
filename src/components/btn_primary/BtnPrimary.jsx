import style from "./btn_primary.module.scss";

function BtnPrimary({ isSignUp, isBtnHotel, title }) {
  return (
    <button
      className={`${style.btn_primary} ${isSignUp ? `${style.sign_up}` : ""} ${
        isBtnHotel ? `${style.btn_hotel}` : ""
      }`}
    >
      {title}
    </button>
  );
}

export default BtnPrimary;
