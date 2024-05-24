import React from "react";
import { Link } from "react-router-dom";
import Bg1 from "../../images/bg1.svg";
import Dv1 from "../../images/dv1.svg";
import Dv2 from "../../images/dv2.svg";
import Dv3 from "../../images/dv3.svg";
import Dv4 from "../../images/dv4.svg";
import Dv5 from "../../images/dv5.svg";
import Dv6 from "../../images/dv6.svg";
import Dv7 from "../../images/dv7.svg";
import Dv8 from "../../images/dv8.svg";
import Sm3 from "../../images/sm3.svg";

const Trang4 = () => {
  return (
    <div>
      <div className="relative h-screen px-32 bg-gradient-to-r from-[#EF586B] to-[#D9112A]">
        <div className="absolute top-0 left-0">
          <img src={Bg1} alt="" className="mix-blend-luminosity" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="items-center flex flex-col gap-2 pt-2">
            <p className="text-[50px] font-bold text-white">
              Dịch vụ của SuperShip
            </p>
            <p className="text-lg text-white">
              Tận tâm phụng sự - Gắn kết thành công
            </p>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-[#FAE7A4] to-[#FEB74E] py-2 rounded-lg w-[auto] px-6"
            >
              ĐĂNG KÝ TÀI KHOẢN
            </Link>
          </div>
          <div className="flex z-40">
            <div className="flex flex-col justify-evenly text-xl w-[549px]">
              <div className="flex items-center gap-2">
                <img src={Dv1} alt="" />
                <p>
                  <span className="text-[#f9d86c] font-semibold">
                    Đồng giá{" "}
                  </span>
                  <span className="text-white">từ 12k 3kg.</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv2} alt="" />
                <p>
                  <span className="text-[#f9d86c] font-semibold">
                    Miễn phí{" "}
                  </span>
                  <span className="text-white">lấy hàng tận nơi</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv3} alt="" />
                <p>
                  <span className="text-[#f9d86c] font-semibold">
                    Miễn phí{" "}
                  </span>
                  <span className="text-white">giao lại nhiều lần</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv4} alt="" />
                <p>
                  <span className="text-[#f9d86c] font-semibold">
                    Miễn phí{" "}
                  </span>
                  <span className="text-white">
                    tin nhắn lịch trình cho người nhận hàng.
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[549px] flex justify-center">
              <img src={Sm3} alt="" />
            </div>
            <div className="flex flex-col justify-evenly text-xl w-[549px]">
              <div className="flex items-center gap-2">
                <img src={Dv5} alt="" />
                <p>
                  <span className="text-white">Ứng trước </span>
                  <span className="text-[#f9d86c] font-semibold">COD</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv6} alt="" />
                <p>
                  <span className="text-white">Đối soát COD </span>
                  <span className="text-[#f9d86c] font-semibold">
                    hằng ngày.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv7} alt="" />
                <p>
                  <span className="text-[#f9d86c] font-semibold">Hỗ trợ </span>
                  <span className="text-white">care đơn 1:1</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Dv8} alt="" />
                <p>
                  <span className="text-white">Sử dụng </span>
                  <span className="text-[#f9d86c] font-semibold">
                    hệ thống trực tuyến{" "}
                  </span>
                  <span className="text-white">chặt chẽ và </span>
                  <span className="text-[#f9d86c] font-semibold">
                    chuyên nghiệp.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trang4;
