import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import navicon from "../../assets/navicon.svg";

const Navbar = () => {
  return (
    <div className="px-[5%] md:px-[8%] py-6 navbar bg-[#F8FAFA] text-[#010F58] font-semibold text-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-8"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Property</a>
            </li>
            <li className="relative">
              <span>Pages</span>
              <img
                src={navicon}
                className="absolute left-11 top-[1.5px]"
                alt=""
              />
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div className="flex justify-center items-center">
          <div>
            <img src={logo2} className="size-7" alt="" />
          </div>
          <div className="-ms-3">
            <img src={logo1} className="size-7" alt="" />
          </div>
          <p className="mt-2 -ms-2 text-lg font-extrabold">Kavinax</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-8 menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Property</a>
          </li>
          <li className="relative">
            <span className="mr-4">Pages</span>
            <img src={navicon} className="absolute right-0 top-1.5" alt="" />
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="menu menu-sm mr-3">Sign In</a>

        <a className="text-sm md:text-base font-normal bg-[#FF5017] py-2 px-4 text-[#F8FAFA] rounded-md">
          Add Property
        </a>
      </div>
    </div>
  );
};

export default Navbar;
