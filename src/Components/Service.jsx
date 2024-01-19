import PropTypes from "prop-types";

const Service = ({ name, image }) => {
  return (
    <div className=" bg-white">
      <figure className="">
        <img src={image} alt="" className="rounded-md" />
      </figure>
      <div className=" items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui omnis
          alias deserunt dolores suscipit rerum dolore. Fuga omnis expedita
          quos.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">FInd a home</button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  image: PropTypes.image,
  name: PropTypes.string,
};

export default Service;
