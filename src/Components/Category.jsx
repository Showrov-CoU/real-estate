import PropTypes from "prop-types";

const Category = ({ image, title, number }) => {
  return (
    <div className="flex justify-center items-center gap-5 bg-[#FCFCFC]">
      <figure>
        <img src={image} className="h-full w-full" alt="Movie" />
      </figure>
      <div className="space-y-2">
        <h2 className=" text-[#010F58] text-base font-bold">{title}</h2>
        <p className="text-[#000] text-sm">
          Lorem ipsum dolor sitam consectetur elit.
        </p>
        <p className="text-[#010F58] text-sm">
          <span>{number}</span> Property
        </p>
      </div>
    </div>
  );
};

Category.propTypes = {
  image: PropTypes.image,
  title: PropTypes.string,
  number: PropTypes.number,
};

export default Category;
