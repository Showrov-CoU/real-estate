import TutorialCircle from "../../Components/TutorialCircle";
import p2 from "../../assets/p3.png";

const Tutorial = () => {
  return (
    <div className="mb-52 relative my-20 ">
      <img src={p2} className="w-full h-96" alt="" />
      <div className="absolute top-0 left-0 w-full h-96 bg-[#010F58] opacity-70 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-3">
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 117 117"
            fill="none"
          >
            <circle cx="58.8435" cy="58.2635" r="57.8654" fill="#FF5017" />
            <circle cx="58.8435" cy="58.2634" r="50.9946" fill="#F8FAFA" />
            <path
              d="M47.9493 34.6475V81.8794L85.0601 58.2634L47.9493 34.6475Z"
              fill="#FF5017"
            />
          </svg>
          <p className="text-3xl font-extrabold text-white text-center">
            Watch Our Video Tutorial
          </p>
        </div>
      </div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 h-60 w-[86%] mx-auto bg-[#F8FAFA] py-2 md:py-0 grid grid-cols-2 justify-items-center md:flex md:justify-evenly md:items-center shadow-md">
        <TutorialCircle
          name="Properties Listed"
          value="98700 +"
        ></TutorialCircle>
        <TutorialCircle
          name="Properties Sold"
          value="48751 +"
        ></TutorialCircle>
        <TutorialCircle
          name="Satisfied Clients"
          value="67845 +"
        ></TutorialCircle>
        <TutorialCircle
          name="Realtor Awards"
          value="10 +"
        ></TutorialCircle>
      </div>
    </div>
  );
};

export default Tutorial;
