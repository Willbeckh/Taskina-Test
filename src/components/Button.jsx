import Proptypes from "prop-types";

const Button = ({ color, label }) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

Button.propTypes = {
  color: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};

export default Button;
