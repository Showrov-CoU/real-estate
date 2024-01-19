import LA from "../../assets/RHS arrow Icon.svg";
import RA from "../../assets/RHS Arrow.svg";
import appart from "../../assets/Appart.png";
import duplex from "../../assets/duplex.png";
import office from "../../assets/office.png";
import Category from "../../Components/Category";

const Categories = () => {
  return (
    <div className="text-[#010F58] px-[8%] py-12">
      <div className="flex justify-between">
        <p className="text-xl md:text-3xl font-extrabold">Browse By Categories</p>
        <div className="flex gap-3">
          <div>
            <img src={LA} className="size-7 md:size-8" alt="" />
          </div>
          <div>
            <img src={RA} className="size-7 md:size-8" alt="" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Category image={appart} title="Appartment" number={22}></Category>
        <Category image={duplex} title="Duplex House" number={25}></Category>
        <Category image={office} title="Office" number={30}></Category>
      </div>
    </div>
  );
};

export default Categories;
