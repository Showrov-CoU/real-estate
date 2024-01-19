import PropTypes from "prop-types";
import cmntImg from "../assets/cmnt.svg";
import viewImg from "../assets/view.svg";
import dateImg from "../assets/date.svg";
import person from "../assets/person.png";

const BlogCard = ({ image, cmnt, date, view, name, minute, personName }) => {
  return (
    <div className=" bg-white text-[#010F58]">
      <figure className="">
        <img src={image} alt="" className="rounded-md" />
      </figure>
      <div className="flex justify-between mt-3">
        <div className="flex justify-center items-center gap-1">
          <img src={dateImg} className="size-4" alt="" />
          <p className="text-sm">{date} Dec, 2022</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={viewImg} className="size-4" alt="" />
          <p className="text-sm">{view}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={cmntImg} className="size-4" alt="" />
          <p className="text-sm">{cmnt} Comments</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 flex flex-col">
        <h2 className="card-title text-[#FF5017] underline">{name}</h2>
        <p className="text-xs">
          Duis aute irure dolor in reprehenderit into volupjl tate velit esse
          cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia
          deserunt mollit
        </p>
        <p>
          <hr />
        </p>
        <div className="flex justify-between items-center pb-2 border-b-2 border-b-[#000]">
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
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#FF5017] text-xs">Read More</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 23 23"
              fill="none"
            >
              <circle cx="11.1502" cy="11.5304" r="11.049" fill="#FF5017" />
              <path
                d="M11.9538 7.13258C11.9538 6.69032 11.5948 6.33301 11.1505 6.33301C10.7062 6.33301 10.3473 6.69032 10.3473 7.13258V10.7307H6.73258C6.28828 10.7307 5.92932 11.088 5.92932 11.5303C5.92932 11.9725 6.28828 12.3298 6.73258 12.3298H10.3473V15.9279C10.3473 16.3702 10.7062 16.7275 11.1505 16.7275C11.5948 16.7275 11.9538 16.3702 11.9538 15.9279V12.3298H15.5685C16.0128 12.3298 16.3717 11.9725 16.3717 11.5303C16.3717 11.088 16.0128 10.7307 15.5685 10.7307H11.9538V7.13258Z"
                fill="white"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  image: PropTypes.image,
  cmnt: PropTypes.number,
  date: PropTypes.number,
  view: PropTypes.number,
  minute: PropTypes.number,
  name: PropTypes.string,
  personName: PropTypes.string,
};

export default BlogCard;
