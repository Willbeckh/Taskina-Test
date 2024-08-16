import Proptypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
        <input
          type="checkbox"
          id={label}
          name={label}
          value={label}
          checked={checked}
          onChange={onChange}
          className={styles.box}
        />
        <label htmlFor={label} className={styles.customCheckbox}></label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  label: Proptypes.string.isRequired,
  checked: Proptypes.bool,
  onChange: Proptypes.func,
};

export default Checkbox;
