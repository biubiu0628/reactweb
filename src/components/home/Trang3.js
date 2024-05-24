import React from "react";
import Tcc from "../../images/tcc.svg";
import Gcr from "../../images/gcr.svg";
import Ckt from "../../images/ckt.svg";
import Cn from "../../images/cn.svg";
import Kh1 from "../../images/kh1.svg";
import Kh2 from "../../images/kh2.svg";
import Kh3 from "../../images/kh3.svg";
import Kh4 from "../../images/kh4.svg";
import Kh5 from "../../images/kh5.svg";
import Kh6 from "../../images/kh6.svg";
import Kh7 from "../../images/kh7.svg";
import Kh8 from "../../images/kh8.svg";

const Trang3 = () => {
  return (
    <div>
      <div className="h-screen px-32">
        <div className="flex flex-col">
          <div className="py-20">
            <div className="text-center">
              <p className="text-[#f53d4f] text-[50px] font-bold">
                Chọn SuperShip vì
              </p>
              <p className="text-lg text-[#5c6a70]">
                Mang đến trải nghiệm linh hoạt và đáp ứng tối đa mọi yêu cầu của
                bạn
              </p>
            </div>
            {/* uudai */}
            <div className="flex flex-row justify-evenly pt-8">
              <div className="flex flex-col bg-[#d9112a] rounded-xl p-8 gap-2 w-[300px] h-[300px]">
                <img src={Tcc} alt="" className="w-[50px] h-[50px]" />
                <p className="text-white font-bold text-2xl">Thành công cao</p>
                <p className="text-white">
                  Tỷ lệ đơn hàng được giao thành công trung bình đạt hơn 96,18%
                </p>
              </div>
              <div className="flex flex-col rounded-xl p-8 gap-2 shadow w-[300px] h-[300px]">
                <img src={Gcr} alt="" className="w-[50px] h-[50px] " />
                <p className="font-bold text-2xl">Cước phí rẻ</p>
                <p>
                  Giao hàng cấp tốc trong ngày, cước phí thấp hơn 20% so với mặt
                  bằng chung.
                </p>
              </div>
              <div className="flex flex-col rounded-xl p-8 gap-2 shadow w-[300px] h-[300px]">
                <img src={Ckt} alt="" className="w-[50px] h-[50px]" />
                <p className="font-bold text-2xl">Chiết khấu tốt</p>
                <p>
                  Chiết khấu ưu đãi đặt hàng hàng tháng từ 5-15% trên tổng cước
                  phí giao hàng.
                </p>
              </div>
              <div className="flex flex-col rounded-xl p-8 gap-2 shadow w-[300px] h-[300px]">
                <img src={Cn} alt="" className="w-[50px] h-[50px] " />
                <p className="font-bold text-2xl">Chuyên nghiệp</p>
                <p>
                  Chuyên nghiệp trong cả phong cách, tốc độ giao hàng, quản lý
                  đơn hàng online.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-center text-xl">Khách hàng, đối tác</p>
            <div className="flex flex-col items-center gap-16 py-16">
              <div className="flex gap-20">
                <img src={Kh1} alt="" />
                <img src={Kh2} alt="" />
                <img src={Kh3} alt="" />
                <img src={Kh4} alt="" />
              </div>
              <div className="flex gap-20">
                <img src={Kh5} alt="" />
                <img src={Kh6} alt="" />
                <img src={Kh7} alt="" />
                <img src={Kh8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trang3;
