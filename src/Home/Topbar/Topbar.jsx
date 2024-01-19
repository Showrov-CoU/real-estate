import location from "./../../assets/location.svg";
import email from "./../../assets/Icon.svg";
import phone from "./../../assets/Icon (1).svg";
import ellipse from "../../assets/Ellipse 1.svg";
import facebook from "../../assets/Facebook.svg";
import intsta from "../../assets/instagram.svg";
import twiter from "../../assets/Twitter.svg";
import linkedin from "../../assets/Linkdin.svg";
import youtube from "../../assets/Youtube.svg";

const Topbar = () => {
  return (
    <div className="px-[5%] md:px-[8%] py-3 flex flex-col md:flex-row justify-between items-center bg-[#010F58] text-[#F8FAFA]">
      <div className="flex gap-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div>
            <img src={location} className="size-6 md:size-10" alt="" />
          </div>
          <p className="text-xs md:text-sm">7124 Landmark Tower, New York</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="relative">
            <img src={ellipse} className="size-6 md:size-10" alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={email} className="size-3 md:size-6" alt="" />
            </div>
          </div>
          <p className="text-xs md:text-sm">support@yourdomain.com</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="relative">
            <img src={ellipse} className="size-6 md:size-10" alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={phone} className="size-2 md:size-4" alt="" />
            </div>
          </div>
          <p className="text-xs md:text-sm">+61383766284</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <img src={facebook} className="size-5 md:size-10" alt="" />
        </div>
        <div>
          <img src={intsta} className="size-5 md:size-10" alt="" />
        </div>
        <div>
          <img src={twiter} className="size-5 md:size-10" alt="" />
        </div>
        <div>
          <img src={linkedin} className="size-5 md:size-10" alt="" />
        </div>
        <div>
          <img src={youtube} className="size-5 md:size-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
