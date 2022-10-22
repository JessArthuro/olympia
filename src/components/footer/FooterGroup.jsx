import { RoomsData, ResourcesData, CompanyData } from "./FooterData";
import style from "./footer.module.scss";

function FooterGroup({ title, rooms, resources, company }) {
  return (
    <div>
      <h4 className={style.group_title}>{title}</h4>

      {/* Si la propiedad rooms es verdadera se hace el recorrido del arreglo RoomsData y retorna un enlace por cada objeto iterado. */}
      {rooms && (
        <div className={style.footer_links}>
          {RoomsData.map((item, index) => {
            return (
              <a className={style.footer_link} key={index} href={item.link}>
                {item.name}
              </a>
            );
          })}
        </div>
      )}

      {/* Si la propiedad resources es verdadera se hace el recorrido del arreglo ResourcesData y retorna un enlace por cada objeto iterado. */}
      {resources && (
        <div className={style.footer_links}>
          {ResourcesData.map((item, index) => {
            return (
              <a className={style.footer_link} key={index} href={item.link}>
                {item.name}
              </a>
            );
          })}
        </div>
      )}

      {/* Si la propiedad company es verdadera se hace el recorrido del arreglo CompanyData y retorna un enlace por cada objeto iterado. */}
      {company && (
        <div className={style.footer_links}>
          {CompanyData.map((item, index) => {
            return (
              <a className={style.footer_link} key={index} href={item.link}>
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FooterGroup;
