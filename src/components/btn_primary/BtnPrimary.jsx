import style from "./btn_primary.module.scss";

function BtnPrimary({ isSignUp, title }) {
  return (
    <button className={`${style.btn_primary} ${isSignUp ? `${style.sign_up}` : ''}`}>{title}</button>
  )
}

export default BtnPrimary;