import Input from "../../Components/Input";
import bannerImg from "../../assets/Rectangle 4612.png";
import searchIcon from "../../assets/Search.svg";
const Banner = () => {
  return (
    <div className="relative">
      <div>
        <div className="absolute -ms-20 md:-ms-[88px]">
          <svg
            className="h-[200px] md:h-[468px] xl:h-[510px] w-[300px] md:w-[840px] xl:w-[900px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1139 800"
            fill="none"
          >
            <path
              d="M878.569 0H0.284912V800H882.011L1138.71 400.094L878.569 0Z"
              fill="#010F58"
            />
          </svg>
        </div>
        <div className=" -ms-20 md:-ms-[88px]">
          <svg
            className="h-[200px] md:h-[468px] xl:h-[510px] w-[300px] md:w-[840px] xl:w-[900px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1139 800"
            fill="none"
          >
            <path
              d="M940.723 0H0.284912V800H940.723L1138.71 400.591L940.723 0Z"
              fill="#FF5017"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-20">
        <img
          src={bannerImg}
          className="h-[200px] md:h-[468px] xl:h-[510px] w-[300px] md:w-[740px] xl:w-[900px]"
          alt=""
        />
      </div>

      <div className="absolute left-[5% ] md:left-[8%] top-4 md:top-24 text-[#F8FAFA]">
        <p className="hidden md:block w-fit text-base md:text-4xl font-extrabold">
          Discover Most <br /> Suitable Property
        </p>
        <p className="hidden md:block w-fit my-1 md:my-6 text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmt{" "}
          <br />
          mod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="bg-[#FF5017] w-fit py-3 ps-5 pr-20 space-x-4 text-sm">
          <span>Sell</span>
          <span className="bg-[#F8FAFA] text-[#FF5017] pt-3 pb-1 px-1 font-bold rounded-bl-lg rounded-br-lg ">
            Rent
          </span>
          <span>Buy</span>
        </div>
        <div className="grid grid-cols-3 md:flex -mt-1 gap-3 bg-[#FF5017] py-3 px-5">
          <Input type="Type" placeholderText="Property Type"></Input>
          <Input type="Your Location" placeholderText="Your Location"></Input>
          <Input
            type="Bed/Bathrooms"
            placeholderText="00 Bed / 00 Bathrooms"
          ></Input>
          <Input type="Price" placeholderText="Price"></Input>
          <div className="flex justify-center items-center">
            <input
              type="search"
              className="w-28 h-10 px-2"
              placeholder="Search"
            ></input>
            <img src={searchIcon} className="size-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
