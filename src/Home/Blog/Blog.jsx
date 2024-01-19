import LA from "../../assets/RHS arrow Icon.svg";
import RA from "../../assets/RHS Arrow.svg";
import BlogCard from "../../Components/BlogCard";
import B1 from "../../assets/B1.png";
import B2 from "../../assets/B2.png";
import B3 from "../../assets/B3.png";

const Blog = () => {
  return (
    <div className="mt-10 px-[8%]">
      <p className="text-[#010F58] font-extrabold">Blog & News</p>
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
      <div className="mt-5 flex justify-between">
        <p className="text-xl md:text-3xl font-extrabold">
          Our Latest Blog & News
        </p>
        <div className="flex gap-3">
          <div>
            <img src={LA} className="size-7 md:size-8" alt="" />
          </div>
          <div>
            <img src={RA} className="size-7 md:size-8" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <BlogCard
          name="7 home trends that
will shape your house"
          image={B1}
          date={5}
          cmnt={12}
          view={1000}
          minute={2}
          personName="David Smith"
        ></BlogCard>
        <BlogCard
          name="Renovating a Living Room? Experts Share Their Secrets"
          image={B2}
          date={6}
          cmnt={13}
          view={2000}
          minute={3}
          personName="John Doe"
        ></BlogCard>
        <BlogCard
          name="Recent Commercial Real Estate Transactions"
          image={B3}
          date={7}
          cmnt={14}
          view={3000}
          minute={4}
          personName="William Seklo"
        ></BlogCard>
      </div>
    </div>
  );
};

export default Blog;
