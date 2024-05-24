import React from "react";
import Sm2 from "../../images/sm2.svg";
import Gg from "../../images/Google.svg";
import Apple from "../../images/Apple.svg";

const Trang2 = () => {
  return (
    <div>
      <div className="h-screen px-32 pt-16">
        <p className="text-[#f53d4f] text-[50px] font-bold">Giới thiệu</p>
        <div className="flex justify-evenly gap-10">
          {/* gioithieu */}
          <div>
            <p className="text-xl font-bold py-4">
              <span className="text-[#f53d4f]">SuperShip </span>
              <span>
                - Sứ mệnh của chúng tôi là mang đến cho bạn trải nghiệm giao
                hàng hoàn hảo: nhanh chóng và giá trị.{" "}
              </span>
            </p>
            <p>
              Với dịch vụ giao hàng thông minh, linh hoạt và cước phí hợp lý,
              chúng tôi là đối tác lý tưởng cho nhu cầu giao hàng của bạn.
              SuperShip không chỉ là dịch vụ giao hàng, mà là giải pháp đơn giản
              và hiệu quả, hỗ trợ doanh nghiệp và người tiêu dùng tạo ra trải
              nghiệm mua sắm trực tuyến tuyệt vời nhất.
            </p>
          </div>
          {/* button */}
          <div className="flex flex-col gap-4 p-4">
            <button>
              <img src={Gg} alt="" />
            </button>
            <button>
              <img src={Apple} alt="" />
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <img src={Sm2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trang2;
