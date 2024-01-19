import PropTypes from "prop-types";

const Service = ({ name, image }) => {
  return (
    <div className=" bg-white text-[#010F58]">
      <figure className="">
        <img src={image} alt="" className="rounded-md" />
      </figure>
      <div className="mt-4 space-y-2 flex flex-col justify-center items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum
          eligendi neque inventore dignissimos dicta, a exercitationem
          recusandae odio eaque?
        </p>
        <div>
          <p className="px-4 py-2 border border-[#FF5017] text-[#FF5017] rounded-md">FInd a home</p>
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
