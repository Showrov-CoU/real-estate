import subs from "../../src/assets/subs.png";
import subsIcon from "../../src/assets/SubIcon.svg";
import subEmail from "../../src/assets/subEmail.svg";

const Subscribe = () => {
  return (
    <div className="relative my-24 mx-[1%] md:mx-[8%]">
      <img src={subs} className="w-full h-96" alt="" />
      <div className="absolute top-0 left-0 w-full h-96 bg-[#010F58] opacity-70 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-3">
        <p className="text-white text-4xl font-extrabold text-center">
          Subscribe For Newsletter
        </p>
        <p className="text-xs text-center text-white">
          Be the first one to know about discounts, offers and events. <br />{" "}
          Unsubscribe whenever you like.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="px-4 py-3 w-96"
          ></input>
          <p className="absolute top-1/2 right-1 transform  -translate-y-1/2 px-4 py-2 rounded-sm bg-[#FF5017] w-fit text-white text-sm">
            Subscribe Now
          </p>
        </div>
        <div className="absolute -top-14">
          <div className="relative">
            <img src={subEmail} className="size-6 md:size-20 border-8 border-white rounded-full" alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={subsIcon} className="size-3 md:size-6" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
