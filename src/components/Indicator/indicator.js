import "./indicator.css";
import { getFormatedDate } from "../../utils/date-utils";
import { isDolarOrPeso } from "../../utils/indicator-utils";
import { useEffect, useState, useRef } from "react";

function Indicator({ nombre, valor, unidad_medida, fecha }) {
  const dateToFormat = useRef(fecha);
  const [dateFormated, setDateFormated] = useState("");
  useEffect(() => {
    setDateFormated(getFormatedDate(dateToFormat));
  }, []);
  return (
    <section className="indicator">
      <h4>{nombre}</h4>
      <article>
        <div>Valor:</div>
        {isDolarOrPeso(unidad_medida) && <span>$</span>}
        <div>{valor}</div>
        {isDolarOrPeso(unidad_medida) &&
          (unidad_medida === "Dólar" ? <span>USD</span> : <span>CLP</span>)}
        {unidad_medida === "Porcentaje" && <span>%</span>}
      </article>
      <footer>{`Última actualización: ${dateFormated}`}</footer>
    </section>
  );
}

export default Indicator;
