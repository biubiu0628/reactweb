import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bg1 from "../../images/bg1.svg";
import Logo from "../../images/Logo.svg";
import Bg2 from "../../images/bg2.svg";
import Home from "../../images/home.svg";
import Fblog from "../../images/fblog.svg";
import Gglog from "../../images/gglog.svg";
import User from "../../images/user.svg";
import Userw from "../../images/userw.svg";
import Signupred from "../../images/signupred.svg";
import Lock from "../../images/lock.svg";
import Eye from "../../images/eye.svg";
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
import Login1 from "../../images/login1.svg";
import Login2 from "../../images/login2.svg";
import Login3 from "../../images/login3.svg";
import Capcha from "../../images/capcha.svg";

const Signup = () => {
  const [clickCS, setClickCS] = useState(false);
  return (
    <div>
      <div className="relative bg-gradient-to-r from-[#EF586B] to-[#D9112A] h-full ">
        <div className="absolute top-0 left-0">
          <img src={Bg1} alt="" className="mix-blend-luminosity" />
        </div>
        {/* header */}
        <header>
          <div className="sticky flex items-center justify-between pt-4 z-40 px-32">
            <img src={Logo} alt="" />
            <div className="text-white">
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
              <button className="text-white py-6 px-4">HỖ TRỢ</button>
            </div>
            <Link
              to="/login"
              className="bg-white py-3 px-6 rounded w-[230px] text-center hover:bg-[#e4e6e7] hover:text-[#F53D4F]"
            >
              ĐĂNG NHẬP TÀI KHOẢN
            </Link>
          </div>
        </header>
        {/*  */}
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
            <Link
              to="/login"
              className="flex gap-2 px-4 border-solid border-r-2 text-[#5c6a70]"
            >
              <img src={Userw} alt="" />
              Đăng nhập
            </Link>
            <Link to="/signup" className="flex gap-2 text-[#f53d4f]">
              <img src={Signupred} alt="" />
              Đăng ký tài khoản
            </Link>
          </div>
        </div>
        {/* bảng đăng ký */}
        <div className="relative z-20 flex justify-center p-12">
          <div className="rounded-xl bg-white p-12 w-[1000px]">
            <p className="text-[#f53d4f] text-[50px] font-bold pb-8">
              Tạo tài khoản
            </p>
            <div className="flex justify-evenly">
              <button>
                <img src={Gglog} alt="" />
              </button>
              <button>
                <img src={Fblog} alt="" />
              </button>
            </div>
            <div className="flex justify-center items-center gap-4 py-10">
              <hr className="w-[380px]" />
              <p className="text-[#5C6A70] font-thin">Hoặc đăng ký với</p>
              <hr className="w-[380px]" />
            </div>
            <div className="grid grid-cols-2 text-center ">
              <div className="flex flex-col gap-3 pr-8 border-solid border-r-[1px]">
                {/* Tài khoản */}
                <p className="text-[#f53d4f] font-semibold text-lg">
                  Thông tin tài khoản
                </p>
                {/* Họ và tên */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 gap-2">
                  <img src={User} alt="" className="w-[18px]" />
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="bg-[#FAFAFA] focus:outline-none w-full"
                  ></input>
                </div>
                {/* Điện thoại */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 gap-2">
                  <img src={User} alt="" className="w-[18px]" />
                  <input
                    type="text"
                    placeholder="Điện thoại"
                    className="bg-[#FAFAFA] focus:outline-none w-full"
                  ></input>
                </div>
                {/* Mật khẩu */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 justify-between">
                  <div className="flex gap-2">
                    <img src={Lock} alt="" />
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="bg-[#FAFAFA] focus:outline-none w-full"
                    ></input>
                  </div>
                  <button>
                    <img src={Eye} alt="" />
                  </button>
                </div>
                {/* Nhập lại mật khẩu */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 justify-between">
                  <div className="flex gap-2">
                    <img src={Lock} alt="" />
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="bg-[#FAFAFA] focus:outline-none w-full"
                    ></input>
                  </div>
                  <button>
                    <img src={Eye} alt="" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3 pl-8">
                {/* Doanh nghiệp */}
                <p className="text-[#f53d4f] font-semibold text-lg">
                  Thông tin doanh nghiệp
                </p>
                {/* Khu vực */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 justify-between">
                  <div className="flex gap-2">
                    <img src={Lock} alt="" />
                    <input
                      placeholder="Khu vực"
                      className="bg-[#FAFAFA] focus:outline-none w-full"
                    ></input>
                  </div>
                  <button>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {/* Tên Shop */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 gap-2">
                  <img src={User} alt="" className="w-[18px]" />
                  <input
                    type="text"
                    placeholder="Tên Công Ty/ Tên Shop"
                    className="bg-[#FAFAFA] focus:outline-none w-full"
                  ></input>
                </div>
                {/* Email */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] py-4 px-5  gap-2">
                  <img src={User} alt="" className="w-[18px]" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-[#FAFAFA] focus:outline-none w-full"
                  ></input>
                </div>
                {/* Mã giới thiệu */}
                <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] py-4 px-5 gap-2">
                  <input
                    type="text"
                    placeholder="Mã giới thiệu"
                    className="bg-[#FAFAFA] focus:outline-none w-full"
                  ></input>
                </div>
              </div>
            </div>
            {/* Capcha */}
            <div className="flex flex-col place-items-center gap-4 pt-4">
              <div className="flex justify-between w-full border-solid border-[1px] rounded-sm p-2 ">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-6 h-6" />
                  <p>I'm not a robot</p>
                </div>
                <img src={Capcha} alt="" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#f53d4f] w-4 h-4" />
                <p>
                  <span>Tôi đồng ý với </span>
                  <span className="underline text-[#0A6EE1]">
                    Điều Khoản Dịch Vụ{" "}
                  </span>
                  <span>& </span>
                  <span className="underline text-[#0A6EE1]">
                    Chính Sách Riêng Tư{" "}
                  </span>
                  <span>của SuperShip</span>
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#EF586B] to-[#D9112A] rounded-lg text-white w-[400px] py-6">
                TẠO TÀI KHOẢN
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex">
          <img src={Bg2} alt="" className="w-full mix-blend-plus-lighter" />
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <div className="bg-[#f3f3f3] h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-20 ">
            <div className="bg-gradient-to-r from-[#EF586B] to-[#D9112A] rounded-xl text-white p-8 w-[380px]">
              <img src={Login1} alt="" />
              <p className="text-[20px] py-4">Về SuperShip</p>
              <p className="underline">Giới Thiệu</p>
              <p className="underline">Mạng Lưới</p>
              <p className="underline">Tin Tức</p>
              <p className="underline">Tuyển Dụng</p>
              <p className="underline">Liên Hệ</p>
            </div>
            <div className="rounded-xl shadow text-[#5C6A70] p-8 bg-white">
              <img src={Login2} alt="" />
              <p className="text-[#F53D4F] text-[20px] py-4">Chính sách</p>
              <p className="underline">Chính Sách Bồi Thường</p>
              <p className="underline">Quy Định Về Khiếu Nại</p>
              <p className="underline">Chính Sách Hỗ Trợ</p>
              <p className="underline">Điều Khoản Sử Dụng</p>
              <p className="underline">Chính Sách Bảo Mật</p>
            </div>
            <div className="rounded-xl shadow text-[#5C6A70] p-8 bg-white">
              <img src={Login3} alt="" />
              <p className="text-[#F53D4F] text-[20px] py-4">
                Thông tin dịch vụ
              </p>
              <p className="underline">Bảng Giá Dịch Vụ</p>
              <p className="underline">Quy Định Hàng Hóa</p>
              <p className="underline">Hàng Hóa Không Vận Chuyển</p>
              <p className="underline">Quy Trình Gửi Hàng</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#EF586B] to-[#D9112A] relative">
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
              <img src={M1} alt="" />
            </button>
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M2} alt="" />
            </button>
            <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
              <img src={M3} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
