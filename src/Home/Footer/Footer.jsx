import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import facebook from "../../assets/Facebook.svg";
import intsta from "../../assets/instagram.svg";
import twiter from "../../assets/Twitter.svg";
import linkedin from "../../assets/Linkdin.svg";
import youtube from "../../assets/Youtube.svg";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import Fphone from "../../assets/F-Phone.svg";
import Femail from "../../assets/F-Email.svg";
import location from "../../assets/location.svg";
import Payment from "../../Components/Payment";
import master from "../../assets/245-2453801_mastercard-logo-png-transparent-background-mastercard-logo 1.png";
import visa from "../../assets/Visa-Logo-PNG-Pic 1.png";
import Paypal from "../../assets/580b57fcd9996e24bc43c530 1.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-16 px-[8%] bg-[#010F58] py-10 grid justify-items-center grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        <div className="space-y-3">
          <div className="flex justify-start items-center">
            <div>
              <img src={logo2} className="size-7" alt="" />
            </div>
            <div className="-ms-3">
              <img src={logo1} className="size-7" alt="" />
            </div>
            <p className="mt-2 -ms-2 text-lg font-extrabold text-white">
              Kavinax
            </p>
          </div>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex justify-start items-center gap-2">
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
            <div>
              <img src={youtube} className="size-5 md:size-8" alt="" />
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-extrabold text-white">Quick Links</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
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
          <div className="mt-4 mb-3 flex  items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0473 9.08169C20.6482 9.68258 20.6482 10.6584 20.0473 11.2593L12.3559 18.9507C11.755 19.5516 10.7792 19.5516 10.1783 18.9507C9.57742 18.3498 9.57742 17.374 10.1783 16.7731L16.7833 10.1681L10.1831 3.56313C9.58223 2.96224 9.58223 1.98639 10.1831 1.3855C10.784 0.784612 11.7599 0.784612 12.3607 1.3855L20.0521 9.07689L20.0473 9.08169ZM3.12627 1.39031L10.8177 9.08169C11.4185 9.68258 11.4185 10.6584 10.8177 11.2593L3.12628 18.9507C2.52539 19.5516 1.54954 19.5516 0.948653 18.9507C0.347763 18.3498 0.347763 17.374 0.948653 16.7731L7.55363 10.1681L0.953459 3.56313C0.35257 2.96224 0.35257 1.98639 0.953459 1.3855C1.55435 0.784613 2.53019 0.784613 3.13108 1.3855L3.12627 1.39031Z"
                fill="#FF5017"
              />
            </svg>
            <p className="text-[#FF5017] text-xs">About Us</p>
          </div>
          <div className="flex mb-3  items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0473 9.08169C20.6482 9.68258 20.6482 10.6584 20.0473 11.2593L12.3559 18.9507C11.755 19.5516 10.7792 19.5516 10.1783 18.9507C9.57742 18.3498 9.57742 17.374 10.1783 16.7731L16.7833 10.1681L10.1831 3.56313C9.58223 2.96224 9.58223 1.98639 10.1831 1.3855C10.784 0.784612 11.7599 0.784612 12.3607 1.3855L20.0521 9.07689L20.0473 9.08169ZM3.12627 1.39031L10.8177 9.08169C11.4185 9.68258 11.4185 10.6584 10.8177 11.2593L3.12628 18.9507C2.52539 19.5516 1.54954 19.5516 0.948653 18.9507C0.347763 18.3498 0.347763 17.374 0.948653 16.7731L7.55363 10.1681L0.953459 3.56313C0.35257 2.96224 0.35257 1.98639 0.953459 1.3855C1.55435 0.784613 2.53019 0.784613 3.13108 1.3855L3.12627 1.39031Z"
                fill="#F8FAFA"
              />
            </svg>
            <p className="text-[#F8FAFA] text-xs">Property</p>
          </div>
          <div className="flex mb-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0473 9.08169C20.6482 9.68258 20.6482 10.6584 20.0473 11.2593L12.3559 18.9507C11.755 19.5516 10.7792 19.5516 10.1783 18.9507C9.57742 18.3498 9.57742 17.374 10.1783 16.7731L16.7833 10.1681L10.1831 3.56313C9.58223 2.96224 9.58223 1.98639 10.1831 1.3855C10.784 0.784612 11.7599 0.784612 12.3607 1.3855L20.0521 9.07689L20.0473 9.08169ZM3.12627 1.39031L10.8177 9.08169C11.4185 9.68258 11.4185 10.6584 10.8177 11.2593L3.12628 18.9507C2.52539 19.5516 1.54954 19.5516 0.948653 18.9507C0.347763 18.3498 0.347763 17.374 0.948653 16.7731L7.55363 10.1681L0.953459 3.56313C0.35257 2.96224 0.35257 1.98639 0.953459 1.3855C1.55435 0.784613 2.53019 0.784613 3.13108 1.3855L3.12627 1.39031Z"
                fill="#F8FAFA"
              />
            </svg>
            <p className="text-[#F8FAFA] text-xs">Our Agents</p>
          </div>
          <div className="flex mb-3  items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0473 9.08169C20.6482 9.68258 20.6482 10.6584 20.0473 11.2593L12.3559 18.9507C11.755 19.5516 10.7792 19.5516 10.1783 18.9507C9.57742 18.3498 9.57742 17.374 10.1783 16.7731L16.7833 10.1681L10.1831 3.56313C9.58223 2.96224 9.58223 1.98639 10.1831 1.3855C10.784 0.784612 11.7599 0.784612 12.3607 1.3855L20.0521 9.07689L20.0473 9.08169ZM3.12627 1.39031L10.8177 9.08169C11.4185 9.68258 11.4185 10.6584 10.8177 11.2593L3.12628 18.9507C2.52539 19.5516 1.54954 19.5516 0.948653 18.9507C0.347763 18.3498 0.347763 17.374 0.948653 16.7731L7.55363 10.1681L0.953459 3.56313C0.35257 2.96224 0.35257 1.98639 0.953459 1.3855C1.55435 0.784613 2.53019 0.784613 3.13108 1.3855L3.12627 1.39031Z"
                fill="#F8FAFA"
              />
            </svg>
            <p className="text-[#F8FAFA] text-xs">Careers</p>
          </div>
          <div className="flex mb-2 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0473 9.08169C20.6482 9.68258 20.6482 10.6584 20.0473 11.2593L12.3559 18.9507C11.755 19.5516 10.7792 19.5516 10.1783 18.9507C9.57742 18.3498 9.57742 17.374 10.1783 16.7731L16.7833 10.1681L10.1831 3.56313C9.58223 2.96224 9.58223 1.98639 10.1831 1.3855C10.784 0.784612 11.7599 0.784612 12.3607 1.3855L20.0521 9.07689L20.0473 9.08169ZM3.12627 1.39031L10.8177 9.08169C11.4185 9.68258 11.4185 10.6584 10.8177 11.2593L3.12628 18.9507C2.52539 19.5516 1.54954 19.5516 0.948653 18.9507C0.347763 18.3498 0.347763 17.374 0.948653 16.7731L7.55363 10.1681L0.953459 3.56313C0.35257 2.96224 0.35257 1.98639 0.953459 1.3855C1.55435 0.784613 2.53019 0.784613 3.13108 1.3855L3.12627 1.39031Z"
                fill="#F8FAFA"
              />
            </svg>
            <p className="text-[#F8FAFA] text-xs">Contact</p>
          </div>
        </div>

        <div>
          <p className="font-extrabold text-white">Recent Post</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
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
          <div className="mt-4 grid grid-cols-2 gap-2">
            <img src={p1} className="size-16" alt="" />
            <img src={p2} className="size-16" alt="" />
            <img src={p3} className="size-16" alt="" />
            <img src={p4} className="size-16" alt="" />
          </div>
        </div>
        <div>
          <p className="font-extrabold text-white">Contact Us</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
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
            <div className="mt-4 flex justify-start items-center gap-2">
              <img src={Fphone} className="size-10" alt="" />
              <div className="text-xs text-white">
                <p>Phone</p>
                <p>+44 (0) 20 9994 7740</p>
              </div>
            </div>
            <div className="mt-3 flex justify-start items-center gap-2">
              <img src={Femail} className="size-10" alt="" />
              <div className="text-xs text-white">
                <p>Phone</p>
                <p>+44 (0) 20 9994 7740</p>
              </div>
            </div>
            <div className="mt-3 flex justify-start items-center gap-2">
              <img src={location} className="size-10" alt="" />
              <div className="text-xs text-white">
                <p>Phone</p>
                <p>+44 (0) 20 9994 7740</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF5017] py-5 px-[8%] flex flex-col md:flex-row justify-between">
        <p className="text-sm text-white">
          &copy;2022 Kavinax Property. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 23 28"
              fill="none"
            >
              <g clipPath="url(#clip0_1_123)">
                <path
                  d="M22.681 9.6804C22.7333 12.3004 22.7774 14.9122 21.8618 17.4307C20.1991 22.0166 17.2553 25.3272 12.6449 27.021C12.0144 27.2525 11.428 27.2647 10.8055 27.0332C5.47221 25.055 2.38386 21.1068 1.04651 15.6353C0.813576 14.6766 0.713174 13.6936 0.713174 12.7025C0.721206 10.4075 0.729238 8.11247 0.705142 5.81745C0.701126 5.28533 0.885865 4.99287 1.36378 4.77759C4.64088 3.30715 7.91398 1.8164 11.1831 0.325653C11.5445 0.159111 11.8698 0.155049 12.2393 0.325653C15.4602 1.80015 18.677 3.27465 21.914 4.71259C22.5284 4.98475 22.7172 5.35845 22.6931 6.00024C22.6529 7.2229 22.681 8.45368 22.681 9.6804ZM9.2955 19.5916C9.56056 19.5348 9.71317 19.2951 9.8939 19.1123C12.5084 16.472 15.1349 13.8399 17.7292 11.1793C19.0666 9.80632 19.1549 10.3303 17.6449 8.73396C17.3798 8.45368 17.171 8.45774 16.926 8.73802C16.7694 8.91675 16.5927 9.07923 16.42 9.24577C14.2031 11.4595 11.9782 13.6652 9.78145 15.8993C9.36378 16.3258 9.09068 16.338 8.70113 15.8912C8.24731 15.3712 7.73727 14.9 7.25534 14.4126C6.0706 13.2143 6.08265 13.2265 4.95414 14.4451C4.6208 14.8066 4.64088 15.0422 4.9702 15.3712C6.26337 16.667 7.53647 17.9831 8.82161 19.2911C8.95815 19.421 9.07864 19.5713 9.2955 19.5916Z"
                  fill="#F8FAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_123">
                  <rect
                    width="22"
                    height="27"
                    fill="white"
                    transform="translate(0.705078 0.200195)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xs text-white">Secure Payments</p>
          </div>
          <Payment image={master}></Payment>
          <Payment image={visa}></Payment>
          <Payment image={Paypal}></Payment>
        </div>
      </div>
    </div>
  );
};

export default Footer;
