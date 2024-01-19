import PropTypes from "prop-types";
import inputFieldIcon from "../../src/assets/inputicon.svg";

const Input = ({ type, placeholderText }) => {
  return (
    <div>
      <p className="text-xs">{type}</p>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholderText}
          className="px-2 py-1 w-28 md:w-32 text-xs"
        ></input>
        <img src={inputFieldIcon} className="size-3 absolute right-3 md:right-1 top-2" alt="" />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholderText: PropTypes.string,
};

export default Input;
