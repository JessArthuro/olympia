import SectionTitle from "../section_title/SectionTitle";
import { HotelsData } from "./HotelsData";
import HotelsItem from "./HotelsItem";
import style from "./hotels.module.scss";

function Hotels() {
  return (
    <section className={style.hotels_section}>
      {/* Componente SectionTitle encargado de mostrar los titulos de cada seccion. */}
      <SectionTitle
        title="the best hotels for you"
        description="These are some of the hotels that we highly recommend for you. We guarantee the quality of the service, the food, the hotel area and various other aspects."
      />

      {/* Seccion grid que contiene la lista de hoteles disponibles. */}
      <div className={`${style.hotels_content} container`}>
        {/* Obtencion de datos recorriendo el arreglo HotelsData y mostrando un componente HotelsItem por cada objeto obtenido. */}
        {HotelsData.map((item) => {
          return <HotelsItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default Hotels;
