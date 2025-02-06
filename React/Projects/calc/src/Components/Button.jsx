import PropTypes from "prop-types";
function Button(props) {
  return (
    <button
      className={props.bgColorClass}
      onClick={function () {
        props.handleClick(props.symbol);
      }}
    >
      {props.symbol}
    </button>
  );
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  bgColorClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
