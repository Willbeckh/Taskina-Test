import Proptypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label }) => {
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
          className={styles.box}
        />
        <label htmlFor={label} className={styles.customCheckbox}></label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  label: Proptypes.string.isRequired,
};

export default Checkbox;
