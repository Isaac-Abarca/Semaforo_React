import { useState, useEffect } from "react";
import { BsFillPersonCheckFill, BsFillPersonXFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Icon = ({ currentColorIndex }) => {
  const [paso, setPaso] = useState(false);

  const handleToggleLike = () => {
    setPaso(!paso);
  };

  useEffect(() => {
    const color =
      currentColorIndex === 0
        ? "red"
        : currentColorIndex === 2
        ? "green"
        : null;
    if (color === "red") {
      setPaso(true);
    } else if (color === "green") {
      setPaso(false);
    }
  }, [currentColorIndex]);

  return (
    <div className="containerIcon">
      <button className="btnRender" onClick={handleToggleLike}>
        {paso ? (
          <BsFillPersonXFill style={{ fontSize: "5rem" }} />
        ) : (
          <BsFillPersonCheckFill style={{ fontSize: "5rem" }} />
        )}
      </button>
    </div>
  );
};

Icon.propTypes = {
  currentColorIndex: PropTypes.number.isRequired,
};

export default Icon;