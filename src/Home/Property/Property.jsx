import PropertyCard from "../../Components/PropertyCard";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

const Property = () => {
  return (
    <div>
      <p className="text-[#010F58] font-extrabold text-center">Our Property</p>
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
        Our Explore Property
      </p>

      <div className="px-[8%] grid grid-cols-1 md:grid-cols-3 gap-5">
        <PropertyCard
          image={p1}
          name="Ready Resort for Sell"
          bed={3}
          bath={4}
          parking={1}
          price="2,525.00$"
        ></PropertyCard>
        <PropertyCard
          image={p2}
          name="Ready Resort for Sell"
          bed={2}
          bath={3}
          parking={2}
          price="525.00$"
        ></PropertyCard>
        <PropertyCard
          image={p3}
          name="Ready Resort for Sell"
          bed={2}
          bath={5}
          parking={1}
          price="2025.00$"
        ></PropertyCard>
        <PropertyCard
          image={p4}
          name="Ready Resort for Sell"
          bed={2}
          bath={2}
          parking={2}
          price="2,555.00$"
        ></PropertyCard>
        <PropertyCard
          image={p5}
          name="Ready Resort for Sell"
          bed={4}
          bath={2}
          parking={3}
          price="5555.00$"
        ></PropertyCard>
        <PropertyCard
          image={p6}
          name="Ready Resort for Sell"
          bed={3}
          bath={4}
          parking={1}
          price="2,525.00$"
        ></PropertyCard>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <div className="relative">
          <p className="text-xs md:text-base text-white bg-[#010F58] w-fit pl-4 py-2 pr-5 md:pr-12 rounded-md">
            View All Property
          </p>
          <div className="absolute left-36 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18"
              viewBox="0 0 30 26"
              fill="none"
            >
              <path
                d="M14.3897 24.1469C12.6931 24.4248 10.9559 24.3238 9.3029 23.8512C7.64987 23.3786 6.12188 22.5461 4.82849 21.4134C3.5351 20.2807 2.50836 18.8759 1.82187 17.2996C1.13538 15.7233 0.806157 14.0147 0.857806 12.2962C0.909455 10.5777 1.3407 8.89196 2.12061 7.35977C2.90052 5.82758 4.00979 4.48694 5.36887 3.43396C6.72795 2.38098 8.30317 1.64175 9.9816 1.26928C11.66 0.896805 13.4001 0.900316 15.077 1.27956"
                stroke="#F8FAFA"
              />
              <path
                d="M29.0026 13.3496C29.1979 13.1544 29.1979 12.8378 29.0026 12.6425L25.8206 9.46056C25.6254 9.2653 25.3088 9.2653 25.1135 9.46056C24.9183 9.65582 24.9183 9.97241 25.1135 10.1677L27.9419 12.9961L25.1135 15.8245C24.9183 16.0198 24.9183 16.3364 25.1135 16.5316C25.3088 16.7269 25.6254 16.7269 25.8206 16.5316L29.0026 13.3496ZM12.5557 13.4961L28.6491 13.4961L28.6491 12.4961L12.5557 12.4961L12.5557 13.4961Z"
                fill="#F8FAFA"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
