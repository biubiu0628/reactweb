import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Bg1 from "../../images/bg1.svg";
import Bg2 from "../../images/bg2.svg";
import Sm1 from "../../images/sm1.svg";

const Trang1 = () => {
  const [clickUser, setClickUser] = useState(false);
  const [clickCS, setClickCS] = useState(false);

  return (
    <div>
      <div className="relative bg-gradient-to-r from-[#EF586B] to-[#D9112A] h-screen px-32">
        <div className="absolute top-0 left-0">
          <img src={Bg1} alt="" className="mix-blend-luminosity" />
        </div>
        {/* header */}
        <header>
          <div className="sticky header flex items-center justify-between pt-4 z-40">
            <img src={Logo} alt="" />
            <div className="text-white flex">
              <button className="text-white py-6 px-4">TRANG CHỦ</button>
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
                    top: "calc(100% + 0.5rem)",
                    left: "50%",
                    transform: "translateX(-70%)",
                  }}
                >
                  <div
                    className="py-2 flex flex-col px-2 w-[160px] h-full relative z-10"
                    role="none"
                  >
                    <button className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]">
                      Chính sách 1
                    </button>
                    <button className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]">
                      Chính sách 2
                    </button>
                    <button className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]">
                      Chính sách 3
                    </button>
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
        <div className="flex justify-between items-center py-12">
          <div className="block z-40">
            <div className="py-8">
              <p>
                <span className="text-[80px] text-white">Giao hàng </span>
                <span className="text-[80px] text-[#f9d86c] italic font-bold">
                  siêu nhanh
                </span>
              </p>
              <p>
                <span className="text-[80px] text-white">Cước phí </span>
                <span className="text-[80px] text-[#f9d86c] italic font-bold">
                  siêu rẻ
                </span>
              </p>
            </div>
            <div className="gap-4 flex">
              <Link
                to="/signup"
                className="w-[210px] py-6 rounded-lg bg-gradient-to-r from-[#FAE7A4] to-[#FEB74E] font-bold text-center"
              >
                ĐĂNG KÝ TÀI KHOẢN
              </Link>
              <Link
                to="/login"
                className="w-[210px] py-6 rounded-lg bg-white font-bold text-center"
              >
                ĐĂNG NHẬP NGAY
              </Link>
            </div>
          </div>
          <div className="block z-10">
            <img src={Sm1} alt="" className="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex">
          <img src={Bg2} alt="" className="w-full mix-blend-plus-lighter" />
        </div>
        <div className="flex gap-2 justify-center z-40 relative">
          <button className="w-[32px] h-[8px] bg-white rounded-full"></button>
          <button className="w-[8px] h-[8px] bg-[#ec8894] rounded-full"></button>
          <button className="w-[8px] h-[8px] bg-[#ec8894] rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default Trang1;
