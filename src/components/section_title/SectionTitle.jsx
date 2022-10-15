import style from "./section_title.module.scss";

function SectionTitle({ title, description }) {
  return (
    <div className={style.titles_content}>
      <h2 className={style.title_section}>{title}</h2>
      <p className={style.description_section}>{description}</p>
    </div>
  )
}

export default SectionTitle;