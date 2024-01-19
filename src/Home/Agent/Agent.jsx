import a1 from "../../assets/agent1.png";
import a2 from "../../assets/agent2.png";
import facebook from "../../assets/Facebook.svg";
import intsta from "../../assets/instagram.svg";
import twiter from "../../assets/Twitter.svg";
import linkedin from "../../assets/Linkdin.svg";

const Agent = () => {
  return (
    <div className="px-[8%]">
      <p className=" text-[#010F58] font-extrabold text-center">Our Agents</p>
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="6"
          viewBox="0 0 91 4"
          fill="none"
        >
          <rect
            x="-0.00012207"
            y="0.67334"
            width="68.7007"
            height="3.03282"
            rx="1.51641"
            fill="#FF5017"
          />
          <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
          <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
          <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
          <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
        </svg>
      </div>
      <p className="my-5 text-xl md:text-3xl font-extrabold text-center">
        Meet Our Agents
      </p>

      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap:5">
        <div>
          <img src={a1} className="h-96 w-80" alt="" />
        </div>
        <div className="relative">
          <img src={a1} className="h-96 w-80" alt="" />
          <div className="h-96 w-80 bg-[#010F5899] absolute top-0 left-0 flex justify-center items-center">
            <div className="h-[370px] w-[300px] border-2 border-white flex flex-col justify-center items-center gap-2">
              <p className="text-2xl font-extrabold text-white">John Doe</p>
              <p className="text-xs text-white">Broker</p>
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img src={facebook} className="size-5 md:size-8" alt="" />
                </div>
                <div>
                  <img src={intsta} className="size-5 md:size-8" alt="" />
                </div>
                <div>
                  <img src={twiter} className="size-5 md:size-8" alt="" />
                </div>
                <div>
                  <img src={linkedin} className="size-5 md:size-8" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={a2} className="h-96 w-80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Agent;
