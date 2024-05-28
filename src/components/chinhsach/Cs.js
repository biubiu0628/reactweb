import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Home from "../../images/home.svg";
import Thumuc from "../../images/thumuc.svg";
import New10 from "../../images/new10.svg";
import Cs1 from "../../images/cs1.svg";
import Cs2 from "../../images/cs2.svg";
import Cs3 from "../../images/cs3.svg";
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
import Like from "../../images/like.svg";
import Share from "../../images/share.svg";
import "animate.css";

const Cs = () => {
  const [clickUser, setClickUser] = useState(false);
  const [clickCS, setClickCS] = useState(false);

  return (
    <div>
      {/* header */}
      <header className="relative bg-gradient-to-r from-[#EF586B] to-[#D9112A] px-32   ">
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
                  clickCS ? " animate__fadeInDown" : "hidden animate__fadeOutUp"
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
      <div className="bg-white px-32 z-20 relative py-4">
        <div className="flex gap-4">
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
          <Link to="/Cs" className="flex gap-2 px-4 text-[#f53d4f]">
            <img src={Thumuc} alt="" />
            Chính sách
          </Link>
        </div>
      </div>
      <main className="px-32 py-16 bg-[#F7F7F7]">
        <p className="text-[#f53d4f] text-[50px] font-bold text-center pb-6">
          Chính sách
        </p>
        <div className="grid grid-cols-[20%_80%] gap-8">
          <div className="flex flex-col">
            <div className="bg-white rounded-xl p-6 mb-8">
              <p className="text-[#F53D4F] text-xl font-bold pb-4">Danh sách</p>
              <div className="flex gap-2 pb-3">
                <img src={Cs1} alt="" />
                <p>Chính sách 1</p>
              </div>
              <div className="flex gap-2 pb-3">
                <img src={Cs2} alt="" />
                <p>Chính sách 2</p>
              </div>
              <div className="flex gap-2">
                <img src={Cs3} alt="" />
                <p>Chính sách 3</p>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-xl">
              <div className="rounded-xl p-4">
                <p className="text-xl font-semibold text-[#F53D4F] pb-4">
                  SuperShip Facebook
                </p>
                <img src={New10} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-[#F53D4F] text-xl font-semibold pb-2 ">
                I. QUY ĐỊNH VỀ KHIẾU NẠI
              </p>
              <div className="text-[#0E1E25]">
                <p>1. Thời hiệu khiếu nại:</p>
                <p>
                  Việc khiếu nại quy định tại Điều này phải được lập thành văn
                  bản. Thời hiệu khiếu nại được quy định như sau:
                </p>
                <p>
                  Thời hiệu khiếu nại đối với dịch vụ chuyển phát Bưu gửi bằng
                  xe máy:
                </p>
                <ul className="list-disc list-inside pl-1">
                  <li>
                    06 (sáu) tháng, kể từ ngày kết thúc Thời gian Toàn trình của
                    Bưu gửi đối với khiếu nại về việc mất Bưu gửi, chuyển phát
                    Bưu gửi chậm so với Thời gian Toàn trình đã công bố.
                  </li>
                  <li>
                    01 (một) tháng, kể từ ngày Bưu gửi được phát cho người nhận
                    đối với khiếu nại về việc Bưu gửi bị suy suyển, hư hỏng, về
                    giá cước và các nội dung khác có liên quan trực tiếp đến Bưu
                    gửi
                  </li>
                </ul>
                <p>Thời hiệu khiếu nại đối với dịch vụ bằng xe tải:</p>
                <ul className="list-disc list-inside pl-1">
                  <li>
                    01 (một) tháng, kể từ ngày kết thúc Thời gian Toàn trình của
                    Hàng hóa đối với khiếu nại về việc mất Hàng hóa, giao Hàng
                    hóa chậm so với thời gian toàn trình tại bảng giá;
                  </li>
                  <li>
                    48 (bốn mươi tám) giờ, kể từ ngày Hàng hóa được phát cho
                    người nhận đối với khiếu nại về việc Hàng hóa bị suy suyển,
                    hư hỏng, về giá cước và các nội dung khác có liên quan trực
                    tiếp đến Hàng hóa
                  </li>
                </ul>
                <p>2. Các kênh tiếp nhận khiếu nại:</p>
                <p>
                  a. Tất cả các vấn đề liên quan đến giao hàng, xử lý sự cố phát
                  sinh, phải được thông báo đến Bộ phận Chăm sóc khách hàng
                  (“CSKH”) qua một trong các kênh liên hệ sau:
                </p>
                <ul className="list-disc list-inside pl-1">
                  <li>Hotline:1900 636 152</li>
                  <li>Email: support@supership.vn</li>
                  <li>Website: mysupership.vn hoặc App SuperShip</li>
                </ul>
                <p>b. Thời gian làm việc:</p>
                <ul className="list-disc list-inside pl-1">
                  <li>Thứ hai – Thứ bảy: 08h00 – 21h00</li>
                  <li>Chủ nhật/Ngày lễ: 09h00 – 17h00</li>
                </ul>
              </div>
            </div>
            <div className="flex h-12 gap-4 mt-4">
              <button
                className="group p-5 relative border-0 flex items-center justify-center 
              bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100 text-[#f53d4f]"
              >
                <span
                  className="group-hover:w-full absolute left-0 h-full w-5 border-y 
                border-l border-red-500 transition-all duration-500"
                ></span>
                <p
                  className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute 
                translate-x-0 transition-all duration-200 flex gap-2 items-center"
                >
                  Thích <img src={Like} alt="" />
                </p>
                <span
                  class="group-hover:translate-x-0 group-hover:opacity-100 absolute 
                translate-x-full opacity-0 transition-all duration-200 flex gap-2 items-center"
                >
                  Đã thích <img src={Like} alt="" />
                </span>

                <span class="group-hover:w-full absolute right-0 h-full w-5 border-y border-r border-red-500 transition-all duration-500"></span>
              </button>
              <button
                className="group p-5 relative border-0 flex items-center justify-center bg-transparent 
              h-auto w-[170px] overflow-hidden transition-all duration-100 text-[#f53d4f]"
              >
                <span
                  className="group-hover:w-full absolute left-0 h-full w-5 border-y 
                border-l border-red-500 transition-all duration-500"
                ></span>
                <p
                  className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute 
                translate-x-0 transition-all duration-200 flex gap-2 items-center"
                >
                  Chia sẻ <img src={Share} alt="" />
                </p>
                <span
                  class="group-hover:translate-x-0 group-hover:opacity-100 absolute 
                translate-x-full opacity-0 transition-all duration-200 flex gap-2 items-center"
                >
                  Đã chia sẻ <img src={Share} alt="" />
                </span>
                <span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500"></span>
              </button>
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
  );
};

export default Cs;
