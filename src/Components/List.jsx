
import PropTypes from "prop-types";
import right from "../assets/right.svg";

const List = ({ list }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <img src={right} className="size-4" alt="" />
      <p className="text-sm">{list}</p>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.string,
};

export default List;
