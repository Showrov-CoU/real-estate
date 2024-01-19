import PropTypes from "prop-types";

import circle from "../../src/assets/circle.svg";

const TutorialCircle = ({ name, value }) => {
  return (
    <div className="relative w-fit">
      <img src={circle} className="size-32" alt="" />
      <p className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FF5017] font-bold">
        {value}
      </p>
      <p className="mt-3 text-[#010F58] font-bold">{name}</p>
    </div>
  );
};

TutorialCircle.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default TutorialCircle;
