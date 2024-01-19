import PropTypes from "prop-types";

const City = ({ name, image, square, country }) => {
  return (
    <div className=" relative bg-white text-[#010F58]">
      <figure className="">
        <img src={image} alt="" className="rounded-md" />
      </figure>
      <div className="px-4 py-2 bg-[#FF5017] w-fit text-white rounded-md absolute top-28 left-32">
        {country}
      </div>
      <div className="mt-4 space-y-2 flex justify-between items-center text-center">
        <h2 className="card-title">{name}</h2>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="33"
            viewBox="0 0 122 33"
            fill="none"
          >
            <path
              d="M122 32.8857L20.1473 32.8858L0.193907 16.8858L20.1473 0.885751L122 0.885742L122 32.8857Z"
              fill="#010F58"
            />
          </svg>
          <p className="text-white text-sm absolute top-2 right-5">
            {square}/Sqft
          </p>
        </div>
      </div>
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-600"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-600"
          checked
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-600"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-600"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-600"
        />
      </div>
    </div>
  );
};

City.propTypes = {
  image: PropTypes.image,
  name: PropTypes.string,
  square: PropTypes.number,
  country: PropTypes.string,
};

export default City;
