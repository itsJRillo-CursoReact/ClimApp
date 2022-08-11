import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;
  // Grados
  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es:</h2>
      <p>
        {(main.temp - kelvin).toFixed(0)} <span>&#x2103;</span>
      </p>

      <div className="tempMinMax">
        <p>
          Mínima: {(main.temp_min - kelvin).toFixed(0)}{" "}
          <span>&#x2103;</span>
        </p>

        <p>
          Máxima: {(main.temp_max - kelvin).toFixed(0)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
