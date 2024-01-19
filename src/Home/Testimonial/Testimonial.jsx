import t1 from "../../assets/t1.svg";
import t2 from "../../assets/t2.svg";
import t3 from "../../assets/t3.svg";

const Testimonial = () => {
  return (
    <div className="px-[8%] my-20">
      <p className=" text-[#010F58] font-extrabold text-center">Testimonials</p>
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
        Clients Feedback
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="relative bg-[#F8FAFA] shadow-sm">
          <img
            src={t1}
            className="size-20 border-4 absolute -top-8 -left-8 border-white p-2 rounded-full"
            alt=""
          />
          <div className="absolute right-5 top-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="mt-12 space-y-2">
            <p className="text-sm">
              Dramatically supply transparent deliverab before & you backward
              comp internal or &quot;organic&quot; sources.
            </p>
            <p className="text-[#010F58] text-base font-bold">Courtney Henry</p>
            <p className="text-xs text-[#FF5017]">Sr. UX/UI Designer</p>
          </div>
        </div>
        <div className="relative bg-[#F8FAFA] shadow-sm">
          <img
            src={t2}
            className="size-20 border-4 absolute -top-8 -left-8 border-white p-2 rounded-full"
            alt=""
          />
          <div className="absolute right-5 top-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="mt-12 space-y-2">
            <p className="text-sm">
              Dramatically supply transparent deliverab before & you backward
              comp internal or &quot;organic&quot; sources.
            </p>
            <p className="text-[#010F58] text-base font-bold">
              Leslie Alexander
            </p>
            <p className="text-xs text-[#FF5017]">Bank Of America</p>
          </div>
        </div>
        <div className="relative bg-[#F8FAFA] shadow-sm">
          <img
            src={t3}
            className="size-20 border-4 absolute -top-8 -left-8 border-white p-2 rounded-full"
            alt=""
          />
          <div className="absolute right-5 top-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="w-5 h-5 mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="mt-12 space-y-2">
            <p className="text-sm">
              Dramatically supply transparent deliverab before & you backward
              comp internal or &quot;organic&quot; sources.
            </p>
            <p className="text-[#010F58] text-base font-bold">Madge Marvin</p>
            <p className="text-xs text-[#FF5017]">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
