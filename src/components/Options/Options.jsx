import PropTypes from "prop-types";
import styles from "./Options.module.css";

function Options({ totalFeedback, onUpdateFeedback, onResetFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={onResetFeedback} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
};

export default Options;
