import PropTypes from "prop-types";

// CSS
import "./Button.css";

// Normal button
export function Button({ color = "primary", width = "content", clickHandler = () => {}, disabled = false, children }) {
	return (
		<button type="button" className={`button btn-${color} btn-${width}`} onClick={clickHandler} disabled={disabled}>
			{children}
		</button>
	);
}

Button.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	clickHandler: PropTypes.func,
	disabled: PropTypes.bool
};
