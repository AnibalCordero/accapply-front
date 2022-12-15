import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import Indicator from "../Indicator/indicator";
import "./indicators-list.css";

function IndicatorsList() {
  const [indicatorsList, setIndicatorsList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((response) => response.json())
      .then((data) => setIndicatorsList(data));
  }, []);

  return (
    <section>
      <h1>Indicadores económicos</h1>
      <main className="indicatorsList">
        {indicatorsList.map((indicator) => (
          <Indicator key={indicator.codigo} {...indicator} />
        ))}
      </main>
    </section>
  );
}

export default IndicatorsList;
