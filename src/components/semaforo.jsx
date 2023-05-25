import { useState, useEffect } from "react";
import Icon from "./iconrender";
import "./semaforo.css";

function Semaforo() {
  const [colors] = useState(["red", "yellow", "green"]);
  const [additionalColors, setAdditionalColors] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [btnEstado, setBtnEstado] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(
        (prevIndex) =>
          (prevIndex + 1) % (colors.length + additionalColors.length)
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [colors.length, additionalColors.length]);

  const handleAddColor = () => {
    const newColor = "blue";
    if (!additionalColors.includes(newColor)) {
      setAdditionalColors((prevColors) => [...prevColors, newColor]);
    }
    setBtnEstado(false);
  };

  const handleRemoveColor = () => {
    setAdditionalColors((prevColors) => {
      const lastIndex = prevColors.length - 1;
      return prevColors.slice(0, lastIndex);
    });
    setBtnEstado(true);
  };

  return (
    <>
      <div className="cont-icon">
        <Icon currentColorIndex={currentColorIndex} />
      </div>
      <div className="container">
        <div className="traffic-light">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`circle ${color} ${
                currentColorIndex === index ? "active" : ""
              }`}
            />
          ))}
          {additionalColors.map((color, index) => (
            <div
              key={index}
              className={`circle ${color} ${
                currentColorIndex === colors.length + index ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container-agregar-color">
        <button className="btnColor" onClick={btnEstado ? handleAddColor : handleRemoveColor}>
          {btnEstado ? "Agregar color" : "Eliminar color"}
        </button>
      </div>
    </>
  );
}

export default Semaforo;