import PropTypes from "prop-types";
function Button(props) {
  return (
    <button>
      {props.symbol}
      {props.value}
    </button>
  );
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
