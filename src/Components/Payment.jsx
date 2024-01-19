import PropTypes from "prop-types";

const Payment = ({ image }) => {
  return (
    <div className="relative h-8 w-24 bg-white rounded-md">
      <img
        src={image}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

Payment.propTypes = {
  image: PropTypes.string,
};

export default Payment;
