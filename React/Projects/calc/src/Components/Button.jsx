/* eslint-disable react/prop-types */

function Button(props) {
  return (
    <button>
      {props.symbol}
      {props.value}
    </button>
  );
}

export default Button;
