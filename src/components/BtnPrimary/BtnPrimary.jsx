import style from "./BtnPrimary.module.scss";

function BtnPrimary({ title }) {
  return (
    <button className={style.btn_primary}>{title}</button>
  )
}

export default BtnPrimary;