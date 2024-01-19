import PropTypes from "prop-types";

const PropertyCard = ({ image, name, bed, bath, parking, price }) => {
  return (
    <div className="p-3 first:bg-[#010F58] text-[#010F58] bg-[#FCFCFC] first:text-white rounded-md">
      <figure className="">
        <img src={image} alt="" className="rounded-md" />
      </figure>

      <div className="flex justify-between mt-3">
        <p>{name}</p>
        <div className="px-2 py-1 bg-[#FF5017]">{price}</div>
      </div>

      <div className="mt-4 space-y-2 flex flex-col">
        <h2 className="card-title text-[#FF5017]  underline">{name}</h2>
        <p className="text-xs">
          Duis aute irure dolor in reprehenderit into volupjl tate velit esse
          cillum dolore eu fugiat.
        </p>
        <p>
          <hr />
        </p>
        <div className="pb-2 flex justify-between mt-3 border-b-2 border-b-[#000]">
          <div className="flex justify-center items-center gap-1">
            <img src={bed} className="size-4" alt="" />
            <p className="text-sm">Beds: {bed}</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src={bath} className="size-4" alt="" />
            <p className="text-sm">Baths: {bath}</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src={parking} className="size-4" alt="" />
            <p className="text-sm">Parking: {parking}</p>
          </div>
        </div>
        {/* <div className="flex justify-between items-center pb-2 border-b-2 border-b-[#000]">
          <div className="flex justify-start items-center gap-2">
            <img src={person} className="size-4" alt="" />
            <p className="text-xs">{personName}</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.7981 0.982422C11.9336 0.982422 15.2981 4.34692 15.2981 8.48242C15.2981 12.6179 11.9336 15.9824 7.7981 15.9824C3.6626 15.9824 0.298096 12.6179 0.298096 8.48242C0.298096 4.34692 3.6626 0.982422 7.7981 0.982422ZM7.7981 2.10742C4.28285 2.10742 1.4231 4.96717 1.4231 8.48242C1.4231 11.9977 4.28285 14.8574 7.7981 14.8574C11.3133 14.8574 14.1731 11.9977 14.1731 8.48242C14.1731 4.96717 11.3133 2.10742 7.7981 2.10742ZM7.544 4.80397C7.85525 4.80397 8.1065 5.05597 8.1065 5.36647V8.68297L10.6602 10.2055C10.9265 10.3652 11.0142 10.7102 10.8552 10.9772C10.7495 11.1535 10.5627 11.2517 10.3715 11.2517C10.2732 11.2517 10.1742 11.2262 10.0835 11.173L7.256 9.48622C7.0865 9.38422 6.9815 9.20047 6.9815 9.00247V5.36647C6.9815 5.05597 7.2335 4.80397 7.544 4.80397Z"
                fill="black"
                fillOpacity="0.75"
              />
            </svg>
            <p className="text-xs">{minute} minutes ago</p>
          </div>
        </div> */}
        <div className="flex justify-between items-center">
          <p className="text-[#FF5017] text-xs">View Details</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 23"
              fill="none"
            >
              <circle cx="20.435" cy="11.4132" r="10.549" stroke="#FF5017" />
              <path
                d="M23.7169 11.7666C23.9122 11.5713 23.9122 11.2548 23.7169 11.0595L20.535 7.87751C20.3397 7.68225 20.0231 7.68225 19.8278 7.87751C19.6326 8.07277 19.6326 8.38935 19.8278 8.58461L22.6563 11.413L19.8278 14.2415C19.6326 14.4367 19.6326 14.7533 19.8278 14.9486C20.0231 15.1438 20.3397 15.1438 20.535 14.9486L23.7169 11.7666ZM0.370697 11.913L23.3634 11.913L23.3634 10.913L0.370697 10.913L0.370697 11.913Z"
                fill="#FF5017"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  image: PropTypes.image,
  name: PropTypes.string,
  price: PropTypes.string,
  bed: PropTypes.number,
  bath: PropTypes.number,
  parking: PropTypes.number,
};

export default PropertyCard;
