import LA from "../../assets/RHS arrow Icon.svg";
import RA from "../../assets/RHS Arrow.svg";
import City from "../../Components/City";
import city1 from "../../assets/city1.png";
import city2 from "../../assets/city2.png";

const Cities = () => {
  return (
    <div className="mx-[8%] my-20">
      <p className="text-[#010F58] font-extrabold">Find Properties</p>
      <div>
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
      <div className="my-5 flex justify-between">
        <p className="text-xl md:text-3xl font-extrabold">Explore Our Cities</p>
        <div className="flex gap-3">
          <div>
            <img src={LA} className="size-7 md:size-8" alt="" />
          </div>
          <div>
            <img src={RA} className="size-7 md:size-8" alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <City
          image={city1}
          name="Fortune Condo Town"
          square={240}
          country="sudney"
        ></City>
        <City
          image={city2}
          name="Farmhouse For Buy"
          square={800}
          country="Bangkok"
        ></City>
        <City
          image={city1}
          name="Apartment For Sale"
          square={500}
          country="Toronto"
        ></City>
      </div>
    </div>
  );
};

export default Cities;
