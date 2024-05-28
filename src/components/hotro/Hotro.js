import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Home from "../../images/home.svg";
// import Hotro1 from "../../images/hotro1.svg";
// import Hotro2 from "../../images/hotro2.svg";
// import Hotro3 from "../../images/hotro3.svg";
// import Hotro4 from "../../images/hotro4.svg";
// import Hotro5 from "../../images/hotro5.svg";
// import Hotro6 from "../../images/hotro6.svg";
import Fb from "../../images/fb.svg";
import Tw from "../../images/twitter.svg";
import Yt from "../../images/youtube.svg";
import Mail from "../../images/mail.svg";
import Ins from "../../images/insta.svg";
import Zalo from "../../images/zalo.svg";
import Tb from "../../images/thongbao.svg";
import M1 from "../../images/mess1.svg";
import M2 from "../../images/mess2.svg";
import M3 from "../../images/mess3.svg";

const Hotro = () => {
  const [clickUser, setClickUser] = useState(false);
  const [clickCS, setClickCS] = useState(false);
  return (
    <div>
      <header className="relative bg-gradient-to-r from-[#EF586B] to-[#D9112A] px-32">
        <div className="sticky header flex items-center justify-between pt-4 z-40">
          <img src={Logo} alt="" />
          <div className="text-white flex">
            <Link to="/" className="text-white py-6 px-4">
              TRANG CHỦ
            </Link>
            <button className="text-white py-6 px-4">GIỚI THIỆU</button>
            <button className="text-white py-6 px-4">BẢNG GIÁ</button>
            <div className="relative">
              <button
                className="text-white py-6 px-4"
                type="button"
                id="menu-button-cs"
                aria-haspopup="true"
                onClick={() => setClickCS(!clickCS)}
              >
                CHÍNH SÁCH
              </button>
              <div
                class={`absolute z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  clickCS ? "" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button-cs"
                tabindex="-1"
                style={{
                  top: "calc(80% + 0.5rem)",
                  left: "50%",
                  transform: "translateX(-70%)",
                }}
              >
                <div
                  className="py-2 flex flex-col px-2 w-[160px] h-full relative z-10"
                  role="none"
                >
                  <Link
                    to="/Cs"
                    className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                  >
                    Chính sách 1
                  </Link>
                  <Link
                    to="/Cs"
                    className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                  >
                    Chính sách 2
                  </Link>
                  <bLink
                    to="/Cs"
                    className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                  >
                    Chính sách 3
                  </bLink>
                </div>
              </div>
            </div>
            <Link to="/tintuc" className="text-white py-6 px-4">
              TIN TỨC
            </Link>
            <button className="text-white py-6 px-4">NHƯỢNG QUYỀN</button>
            <button className="text-white py-6 px-4">API</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex rounded-lg bg-white pr-2 pl-4 py-1">
              <input
                placeholder="Tra đơn hàng..."
                className="block w-full focus:outline-none"
              ></input>
              <button className="bg-[#db1f35] rounded-lg p-2 h-[40px] w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <div>
                <button
                  className="bg-white rounded-lg h-[40px] w-[40px] flex justify-center items-center "
                  type="button"
                  id="menu-button-user"
                  aria-haspopup="true"
                  onClick={() => setClickUser(!clickUser)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div
                class={`absolute right-0 z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  clickUser ? "" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button-user"
                tabindex="-1"
              >
                <div
                  className="py-1 flex flex-col px-2 w-[160px] h-[100px] relative z-10"
                  role="none"
                >
                  <Link
                    to="/signup"
                    className="w-full h-full flex items-center pl-2 hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    to="/login"
                    className="w-full h-full flex items-center pl-2 hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                  >
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-white px-32 z-20 relative py-4">
        <div className="flex gap-4 ">
          <div className="flex items-center">
            <Link to="/">
              <img src={Home} alt="" />
            </Link>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
          </div>
          <Link
            to="/hotro"
            className="flex gap-2 px-4 text-[#f53d4f] items-center"
          >
            <img src={M1} alt="" className="w-[18px] h-[18px]" />
            Hỗ trợ
          </Link>
        </div>
      </div>
      <main>
        <div className="px-32">
          <div className="text-center pt-16">
            <p className="text-[#f53d4f] text-[50px] font-bold">Hỗ trợ</p>
            <p className="text-lg text-[#5c6a70]">
              Mang đến trải nghiệm linh hoạt và đáp ứng tối đa mọi yêu cầu của
              bạn
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-8 py-20">
            {/* 1 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="40"
                  height="34"
                  viewBox="0 0 40 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.5607 0.43934C34.2794 0.158035 33.8978 0 33.5 0C33.1022 0 32.7206 0.158035 32.4393 0.43934L28.4393 4.43934C27.8536 5.02513 27.8536 5.97487 28.4393 6.56066C29.0251 7.14645 29.9749 7.14645 30.5607 6.56066L32 5.12132V11.5C32 12.3284 32.6716 13 33.5 13C34.3284 13 35 12.3284 35 11.5V5.12132L36.4393 6.56066C37.0251 7.14645 37.9749 7.14645 38.5607 6.56066C39.1464 5.97487 39.1464 5.02513 38.5607 4.43934L34.5607 0.43934Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.3934 2C26.7439 2 26.9194 2.42375 26.6716 2.67157C25.1095 4.23367 25.1095 6.76633 26.6716 8.32843C26.9482 8.60507 27.2553 8.83272 27.582 9.01138C28.5512 9.5413 29.5 10.3954 29.5 11.5C29.5 13.7091 31.2909 15.5 33.5 15.5C35.7091 15.5 37.5 13.7091 37.5 11.5V10.4687C37.5 9.93371 37.9399 9.51166 38.4594 9.38385C38.5557 9.36016 38.6513 9.33285 38.7459 9.30192C39.3088 9.11795 40 9.40778 40 10V26C40 30.4183 36.4183 34 32 34H8C3.58172 34 0 30.4183 0 26V10C0 5.58172 3.58172 2 8 2H26.3934ZM9.2 7.1C8.70294 6.43726 7.76274 6.30294 7.1 6.8C6.43726 7.29706 6.30294 8.23726 6.8 8.9L12.4 16.3667C14.1702 18.727 16.3341 20.186 18.6822 20.5711C21.0449 20.9585 23.3653 20.2203 25.3412 18.6279C25.9863 18.1081 26.0878 17.1638 25.5679 16.5188C25.0481 15.8737 24.1038 15.7722 23.4588 16.2921C22.0347 17.4397 20.5551 17.8381 19.1678 17.6106C17.7659 17.3807 16.2298 16.473 14.8 14.5667L9.2 7.1Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Tạo yêu cầu hỗ trợ
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.78176 6.4015L3.50063 2.96376C4.72163 0.521768 7.9762 -0.00638127 9.90676 1.92418L14.4702 6.48766C15.6877 7.7051 15.9895 9.56498 15.2195 11.1049L14.6941 12.1559C13.8486 13.8467 13.8346 15.8474 14.8197 17.4608C15.5909 18.7239 16.5782 20.1746 17.5615 21.1579C18.4089 22.0053 19.6035 22.8557 20.726 23.5682C22.6071 24.7623 25.0069 24.5372 26.8016 23.2167C28.4019 22.0392 30.6277 22.2326 32.0009 23.6685L35.9198 27.7663C37.781 29.7123 37.2264 32.9043 34.8179 34.1086L31.2652 35.8849C28.5042 37.2654 25.3759 37.8519 22.4576 36.8459C18.9521 35.6376 13.9284 33.2216 9.18674 28.48C4.44512 23.7383 2.02914 18.7146 0.820784 15.2091C-0.185194 12.2908 0.401271 9.16248 1.78176 6.4015Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Gọi trực tiếp
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  1900.636.152 (08h00 – 20h00)
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="43"
                  height="38"
                  viewBox="0 0 43 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.3335 8C42.3335 12.4183 38.7518 16 34.3335 16C29.9152 16 26.3335 12.4183 26.3335 8C26.3335 3.58172 29.9152 0 34.3335 0C38.7518 0 42.3335 3.58172 42.3335 8ZM34.3335 4.5C35.1619 4.5 35.8335 5.17157 35.8335 6V7.3H36.3335C37.1619 7.3 37.8335 7.97157 37.8335 8.8C37.8335 9.62843 37.1619 10.3 36.3335 10.3H34.3335C33.5051 10.3 32.8335 9.62843 32.8335 8.8V6C32.8335 5.17157 33.5051 4.5 34.3335 4.5Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.3335 17.2211C38.6079 18.3462 36.5471 19 34.3335 19C28.2584 19 23.3335 14.0751 23.3335 8C23.3335 7.31701 23.3957 6.64855 23.5149 6H8.3335C3.91522 6 0.333496 9.58172 0.333496 14V30C0.333496 34.4183 3.91522 38 8.3335 38H32.3335C36.7518 38 40.3335 34.4183 40.3335 30V17.2211ZM7.4335 10.8C8.09624 10.3029 9.03644 10.4373 9.5335 11.1L15.1335 18.5667C16.5633 20.473 18.0994 21.3807 19.5013 21.6106C20.8886 21.8381 22.3682 21.4397 23.7923 20.2921C24.4373 19.7722 25.3816 19.8737 25.9014 20.5188C26.4213 21.1638 26.3198 22.1081 25.6747 22.6279C23.6988 24.2203 21.3784 24.9585 19.0157 24.5711C16.6676 24.186 14.5037 22.727 12.7335 20.3667L7.1335 12.9C6.63644 12.2373 6.77075 11.2971 7.4335 10.8Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Email
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 0H8C3.58172 0 0 3.58172 0 8V17.9777C0 21.3037 2.6963 24 6.02234 24C7.48731 24 8.90122 24.534 10 25.5005V16C10 12.6863 12.6863 10 16 10H30V8C30 3.58172 26.4183 0 22 0Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32 12H16C13.7909 12 12 13.7909 12 16V26.3821C12 29.043 14.157 31.2 16.8179 31.2C18.0081 31.2 19.1562 31.6406 20.0409 32.4368L21.3241 33.5917C22.8454 34.9608 25.1546 34.9608 26.6759 33.5917L27.9591 32.4368C28.8438 31.6406 29.9919 31.2 31.1821 31.2C33.843 31.2 36 29.043 36 26.3821V16C36 13.7909 34.2091 12 32 12ZM19.5 22.5C19.5 23.3284 18.8284 24 18 24C17.1716 24 16.5 23.3284 16.5 22.5C16.5 21.6716 17.1716 21 18 21C18.8284 21 19.5 21.6716 19.5 22.5ZM24 24C24.8284 24 25.5 23.3284 25.5 22.5C25.5 21.6716 24.8284 21 24 21C23.1716 21 22.5 21.6716 22.5 22.5C22.5 23.3284 23.1716 24 24 24ZM31.5 22.5C31.5 23.3284 30.8284 24 30 24C29.1716 24 28.5 23.3284 28.5 22.5C28.5 21.6716 29.1716 21 30 21C30.8284 21 31.5 21.6716 31.5 22.5Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Zalo chat
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="34"
                  height="38"
                  viewBox="0 0 34 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.6669 0C15.2486 0 11.6669 3.58172 11.6669 8V30C11.6669 33.6674 14.1346 36.7584 17.5001 37.7031V32C17.5001 30.067 19.0671 28.5 21.0001 28.5H24.3334C26.2664 28.5 27.8334 30.067 27.8334 32V37.7032C31.1991 36.7585 33.6669 33.6674 33.6669 30V8C33.6669 3.58172 30.0851 0 25.6669 0H19.6669ZM21.4447 5.5C20.6163 5.5 19.9447 6.17157 19.9447 7C19.9447 7.82843 20.6163 8.5 21.4447 8.5H23.8891C24.7176 8.5 25.3891 7.82843 25.3891 7C25.3891 6.17157 24.7176 5.5 23.8891 5.5H21.4447ZM19.9447 13C19.9447 12.1716 20.6163 11.5 21.4447 11.5H23.8891C24.7176 11.5 25.3891 12.1716 25.3891 13C25.3891 13.8284 24.7176 14.5 23.8891 14.5H21.4447C20.6163 14.5 19.9447 13.8284 19.9447 13ZM21.4447 17.5C20.6163 17.5 19.9447 18.1716 19.9447 19C19.9447 19.8284 20.6163 20.5 21.4447 20.5H23.8891C24.7176 20.5 25.3891 19.8284 25.3891 19C25.3891 18.1716 24.7176 17.5 23.8891 17.5H21.4447ZM19.9447 25C19.9447 24.1716 20.6163 23.5 21.4447 23.5H23.8891C24.7176 23.5 25.3891 24.1716 25.3891 25C25.3891 25.8284 24.7176 26.5 23.8891 26.5H21.4447C20.6163 26.5 19.9447 25.8284 19.9447 25Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                  <path
                    d="M24.8334 32C24.8334 31.7239 24.6096 31.5 24.3334 31.5H21.0001C20.724 31.5 20.5001 31.7239 20.5001 32V38H24.8334V32Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                  <path
                    d="M8.69737 19.291C8.2965 21.7535 6.96727 23.7852 5.81719 24.9697V35C5.81719 35.8284 5.14562 36.5 4.31719 36.5C3.48876 36.5 2.81719 35.8284 2.81719 35V24.5889C1.75995 23.3741 0.647412 21.507 0.286676 19.291C-0.139797 16.6713 0.510836 13.685 3.25653 10.9393C3.59397 10.6019 4.05218 10.4588 4.49202 10.5102C4.93187 10.4588 5.39008 10.6019 5.72752 10.9393C8.47321 13.685 9.12384 16.6713 8.69737 19.291Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Zalo chat
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="border-solid border-[1px] border-[#E4E6E7] rounded-xl relative flex justify-center h-[200px] group hover:border-none hover:shadow">
              <div
                className="border-solid border-[1px] border-[#E4E6E7] rounded-full w-[72px] h-[72px] flex 
                items-center justify-center absolute -top-10 z-10 bg-white 
                group-hover:border-[#F53D4F] group-hover:bg-[#FEF0F2]"
              >
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3335 0.5C5.08679 0.5 0.833496 4.75329 0.833496 10V30C0.833496 35.2467 5.08679 39.5 10.3335 39.5H22.3335C27.5802 39.5 31.8335 35.2467 31.8335 30V13.3137C31.8335 10.7942 30.8326 8.37779 29.051 6.5962L25.7373 3.28249C23.9557 1.50089 21.5393 0.5 19.0198 0.5H10.3335ZM6.8335 14C6.8335 13.1716 7.50507 12.5 8.3335 12.5H16.3335C17.1619 12.5 17.8335 13.1716 17.8335 14C17.8335 14.8284 17.1619 15.5 16.3335 15.5H8.3335C7.50507 15.5 6.8335 14.8284 6.8335 14ZM6.8335 22C6.8335 21.1716 7.50507 20.5 8.3335 20.5H24.3335C25.1619 20.5 25.8335 21.1716 25.8335 22C25.8335 22.8284 25.1619 23.5 24.3335 23.5H8.3335C7.50507 23.5 6.8335 22.8284 6.8335 22ZM6.8335 30C6.8335 29.1716 7.50507 28.5 8.3335 28.5H24.3335C25.1619 28.5 25.8335 29.1716 25.8335 30C25.8335 30.8284 25.1619 31.5 24.3335 31.5H8.3335C7.50507 31.5 6.8335 30.8284 6.8335 30Z"
                    className="fill-[#949B9E] group-hover:fill-[#F53D4F]"
                  />
                </svg>
              </div>
              <div className="px-8 py-2 flex flex-col text-center pt-12">
                <p className="text-2xl font-bold group-hover:text-[#F53D4F]">
                  Hướng dẫn
                </p>
                <p className="text-lg text-[#5C6A70] group-hover:text-[#0E1E25]">
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-gradient-to-br from-[#EF586B] to-[#D9112A] relative">
          <div className="text-white px-32 py-11">
            <div className="grid grid-cols-2 py-12">
              <div>
                <img src={Logo} alt="" />
                <p className="pt-2">
                  <span>
                    Địa chỉ: 32 Thân Nhân Trung, Phường 13, Quận Tân Bình, Tp.
                    Hồ Chí Minh Và mạng lưới hơn 270 bưu cục toàn quốc. Chi tiết
                    tại{" "}
                  </span>
                  <a
                    href="https://supership.vn/mang-luoi-buu-cuc-supership?ref=SuperShip"
                    className="underline"
                  >
                    ĐÂY.
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-2 place-items-center">
                <div>
                  <p className="text-2xl pb-2">Social</p>
                  <div className="flex gap-2 pb-2">
                    <img src={Fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <img src={Tw} alt="" />
                    <p>Twitter</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <img src={Yt} alt="" />
                    <p>Youtube</p>
                  </div>
                </div>
                <div>
                  <p className="text-2xl pb-2">Liên hệ</p>
                  <div className="flex gap-2 pb-2">
                    <img src={Mail} alt="" />
                    <p>contact@supership.vn</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <img src={Ins} alt="" />
                    <p>instagr.am/supership.vn</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <img src={Zalo} alt="" />
                    <p>zalo.me/supership</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border-t-2 py-8 flex items-center justify-between">
              <div>
                <p>
                  Giấy chứng nhận Đăng ký Kinh doanh số 0313225918 do Sở Kế
                  hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/05/2015
                </p>
                <p>
                  Giấy phép bưu chính trong nước, quốc tế do Bộ Thông tin và
                  Truyền thông số 201/GP-BTTTT cấp ngày 07/04/2021
                </p>
                <p>
                  Văn bản xác nhận thông báo hoạt động Bưu chính do Bộ Thông tin
                  và Truyền thông số 1540/XN-BTTTT cấp ngày 17/05/2019
                </p>
                <p>
                  © 2022 - Bản quyền của CÔNG TY CỔ PHẦN SUPERSHIP VIỆT NAM -
                  supership.vn
                </p>
              </div>
              <img src={Tb} alt="" />
            </div>
          </div>
          <div className="fixed bottom-12 right-6 flex flex-col gap-6">
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M2} alt="" className="w-[40px] h-[40px]" />
            </button>
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M3} alt="" className="w-[40px] h-[40px]" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hotro;
