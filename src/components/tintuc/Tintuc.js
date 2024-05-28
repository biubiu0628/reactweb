import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Home from "../../images/home.svg";
import Thumuc from "../../images/thumuc.svg";
import New1 from "../../images/new1.svg";
import New2 from "../../images/new2.svg";
import New3 from "../../images/new3.svg";
import New4 from "../../images/new4.svg";
import New5 from "../../images/new5.svg";
import New6 from "../../images/new6.svg";
import New7 from "../../images/new7.svg";
import New8 from "../../images/new8.svg";
import New9 from "../../images/new9.svg";
import New10 from "../../images/new10.svg";
import Vector1 from "../../images/vector1.svg";
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

const Tintuc = () => {
  const [clickUser, setClickUser] = useState(false);
  const [clickCS, setClickCS] = useState(false);

  return (
    <div>
      <div>
        {/* header */}
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
                    <Link
                      to="/Cs"
                      className="w-full py-3 text-left pl-2 text-black hover:bg-[#e4e6e7] rounded hover:text-[#F53D4F]"
                    >
                      Chính sách 3
                    </Link>
                  </div>
                </div>
              </div>
              <button className="text-white py-6 px-4">TIN TỨC</button>
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
        {/*  */}
        <div className="bg-white px-32 z-20 relative py-4">
          <div className="flex gap-4">
            <div className="flex">
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
            <Link to="/tintuc" className="flex gap-2 px-4 text-[#f53d4f]">
              <img src={Thumuc} alt="" />
              Tin tức
            </Link>
          </div>
        </div>
        <div className="bg-[#F7F7F7] flex px-40 py-8 gap-20">
          <div className="flex flex-col gap-4">
            <div>
              <img src={New1} alt="" className="rounded-xl w-full" />
              <div className="flex items-center gap-2 py-4">
                <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                  <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                  <p>Khuyến mãi</p>
                </div>
                <p>22/11/2023</p>
              </div>
              <p className="text-2xl font-bold">
                Miễn phí 3 Tháng Giải pháp quản lý bán hàng HaraSocial
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col pr-4">
                <img src={New2} alt="" className="rounded-xl w-full" />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
              <div className="flex flex-col pl-4">
                <img src={New3} alt="" className="rounded-xl w-full" />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pr-4">
                <img src={New4} alt="" className="rounded-xl w-full" />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
              <div className="flex flex-col pl-4">
                <img src={New5} alt="" className="rounded-xl w-full" />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pr-4">
                <img src={New6} alt="" className="rounded-xl w-full" />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
              <div className="flex flex-col pl-4">
                <img src={New7} alt="" className="rounded-xl w-full " />
                <div className="flex items-center gap-2 py-4">
                  <div className="flex rounded-full bg-white border-solid border-[1px] border-[#E4E6E7] px-2 w-[136px] gap-2 justify-center">
                    <img src={Vector1} alt="" className="stroke-[#1C3C4A]" />
                    <p>Khuyến mãi</p>
                  </div>
                  <p>22/11/2023</p>
                </div>
                <p className="text-2xl font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-white border-solid border-[1px] border-[#E4E6E7] shadow w-[250px] py-4 rounded-xl">
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex text-[#F53D4F] gap-2 text-xl font-bold items-center">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Gần đây</p>
            </div>
            <div className="flex flex-col">
              <img src={New8} alt="" className="rounded-t-xl" />
              <div className="shadow rounded-b-xl p-4">
                <p className="text-lg font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
                <p className="py-4 text-base">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
                <div className="text-[#F53D4F] flex text-sm items-center">
                  <p>XEM CHI TIẾT</p>
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
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={New9} alt="" className="rounded-t-xl" />
              <div className="shadow rounded-b-xl p-4">
                <p className="text-lg font-bold">
                  Hướng dẫn tạo đơn hàng trên ứng dụng SuperShip
                </p>
                <p className="py-4 text-base">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
                <div className="text-[#F53D4F] flex text-sm items-center">
                  <p>XEM CHI TIẾT</p>
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
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="shadow rounded-xl p-4">
                <p className="text-xl font-semibold text-[#F53D4F] pb-4">
                  SuperShip Facebook
                </p>
                <img src={New10} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
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
            <Link
              to="/hotro"
              className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center"
            >
              <img src={M1} alt="" />
            </Link>
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M2} alt="" className="w-[40px] h-[40px]" />
            </button>
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M3} alt="" className="w-[40px] h-[40px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tintuc;
