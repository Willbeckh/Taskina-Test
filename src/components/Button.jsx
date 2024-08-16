import Proptypes from "prop-types";
import './styles.css'

const Button = ({ color, label }) => {
  return (
    <button className="button" style={{ "--button-color": color }}>
      {label}
    </button>
  );
};

Button.propTypes = {
  color: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};

export default Button;
