import React from "react";
import { Link } from "react-router-dom";
import Bg1 from "../../images/bg1.svg";
import Logo from "../../images/Logo.svg";
import Bg2 from "../../images/bg2.svg";
import Home from "../../images/home.svg";
import Fblog from "../../images/fblog.svg";
import Gglog from "../../images/gglog.svg";
import User from "../../images/user.svg";
import Userred from "../../images/user-red.svg";
import Signup from "../../images/signup.svg";
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

const login = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-[#EF586B] to-[#D9112A] h-screen ">
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
              <button className="text-white py-6 px-4">CHÍNH SÁCH</button>
              <button className="text-white py-6 px-4">TIN TỨC</button>
              <button className="text-white py-6 px-4">NHƯỢNG QUYỀN</button>
              <button className="text-white py-6 px-4">HỖ TRỢ</button>
            </div>
            <Link
              to="/signup"
              className="bg-white py-3 px-6 rounded w-[230px] text-center hover:bg-[#e4e6e7] hover:text-[#F53D4F]"
            >
              ĐĂNG KÝ TÀI KHOẢN
            </Link>
          </div>
        </header>
        {/*  */}
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
              to="/login"
              className="flex gap-2 px-4 border-solid border-r-2 text-[#f53d4f]"
            >
              <img src={Userred} alt="" />
              Đăng nhập
            </Link>
            <Link to="/signup" className="flex gap-2 text-[#5c6a70]">
              <img src={Signup} alt="" />
              Đăng ký tài khoản
            </Link>
          </div>
        </div>
        {/* bảng đăng nhập */}
        <div className="relative z-20 flex justify-center p-12">
          <div className="rounded-xl bg-white p-12 w-[1000px]">
            <p className="text-[#f53d4f] text-[50px] font-bold pb-8">
              Đăng nhập
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
              <p className="text-[#5C6A70] font-thin">Hoặc đăng nhập với</p>
              <hr className="w-[380px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex rounded-xl bg-[#FAFAFA] border-solid border-[1px] border-l-4 py-4 border-l-[#f53d4f] px-4 gap-2">
                <img src={User} alt="" className="w-[18px]" />
                <input
                  type="text"
                  placeholder="Email/SDT"
                  className="bg-[#FAFAFA] focus:outline-none w-full"
                ></input>
              </div>
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
              <div className="flex flex-col place-items-center gap-4">
                <label for="duytri" className="flex gap-1">
                  <input
                    type="checkbox"
                    id="duytri"
                    className="accent-[#f53d4f]"
                  />
                  Duy trì đăng nhập
                </label>
                <button className="bg-gradient-to-r from-[#EF586B] to-[#D9112A] rounded-lg text-white w-[400px] py-6">
                  ĐĂNG NHẬP
                </button>
                <p className="text-[#c20a1c]">Quên mật khẩu?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex">
          <img src={Bg2} alt="" className="w-full mix-blend-plus-lighter" />
        </div>
      </div>
      {/* Trang2 */}
      <div className="h-screen flex flex-col">
        <div className="bg-[#f3f3f3] h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-20 ">
            <div className="bg-gradient-to-r from-[#EF586B] to-[#D9112A] rounded-xl text-white p-8 w-[380px]">
              <img src={Login1} alt="" />
              <p className="text-[20px]">Về SuperShip</p>
              <p className="underline">Giới Thiệu</p>
              <p className="underline">Mạng Lưới</p>
              <p className="underline">Tin Tức</p>
              <p className="underline">Tuyển Dụng</p>
              <p className="underline">Liên Hệ</p>
            </div>
            <div className="rounded-xl shadow text-[#5C6A70] p-8 bg-white">
              <img src={Login2} alt="" />
              <p className="text-[#F53D4F] text-[20px]">Chính sách</p>
              <p className="underline">Chính Sách Bồi Thường</p>
              <p className="underline">Quy Định Về Khiếu Nại</p>
              <p className="underline">Chính Sách Hỗ Trợ</p>
              <p className="underline">Điều Khoản Sử Dụng</p>
              <p className="underline">Chính Sách Bảo Mật</p>
            </div>
            <div className="rounded-xl shadow text-[#5C6A70] p-8 bg-white">
              <img src={Login3} alt="" />
              <p className="text-[#F53D4F] text-[20px]">Thông tin dịch vụ</p>
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

export default login;
