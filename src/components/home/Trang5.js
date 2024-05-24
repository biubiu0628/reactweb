import React from "react";
import Vd1 from "../../images/video1.svg";
import Vd2 from "../../images/video2.svg";
import Tt1 from "../../images/tt1.svg";
import Tt2 from "../../images/tt2.svg";
import Tt3 from "../../images/tt3.svg";
import Tt4 from "../../images/tt4.svg";

const Trang5 = () => {
  return (
    <div>
      <div className="h-screen px-32 pt-12">
        <div>
          <p className="text-[#f53d4f] text-[50px] font-bold">Truyền thông</p>
          <div className="flex justify-evenly py-3">
            <div>
              <img src={Vd1} alt="" />
              <p className="text-2xl font-bold">
                Hướng dẫn tạo đơn hàng SuperShip
              </p>
            </div>
            <div>
              <img src={Vd2} alt="" />
              <p className="text-2xl font-bold">
                Hướng dẫn tạo đơn hàng SuperShip
              </p>
            </div>
          </div>
          <p className="text-[#f53d4f] text-[50px] font-bold">Tin tức</p>
          <div className="flex gap-8 pt-4">
            <div className="flex flex-col border-solid border-2 rounded-xl">
              <img src={Tt1} alt="" />
              <div className="p-2">
                <p className="font-bold text-lg">
                  Hướng dẫn tạo đơn hàng SuperShip
                </p>
                <p className="text-[#5c6a70]">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
              </div>
            </div>
            <div className="flex flex-col border-solid border-2 rounded-xl">
              <img src={Tt2} alt="" />
              <div className="p-2">
                <p className="font-bold text-lg">
                  Hướng dẫn tạo đơn hàng SuperShip
                </p>
                <p className="text-[#5c6a70]">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
              </div>
            </div>
            <div className="flex flex-col border-solid border-2 rounded-xl">
              <img src={Tt3} alt="" />
              <div className="p-2">
                <p className="font-bold text-lg">
                  Hướng dẫn tạo đơn hàng SuperShip
                </p>
                <p className="text-[#5c6a70]">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
              </div>
            </div>
            <div className="flex flex-col border-solid border-2 rounded-xl">
              <img src={Tt4} alt="" />
              <div className="p-2">
                <p className="font-bold text-lg">
                  Hướng dẫn tạo đơn hàng SuperShip
                </p>
                <p className="text-[#5c6a70]">
                  Nhập HELLSUPERSHIP và liên kết ngân hàng để nhận gói quà đến 1
                  TRIỆU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trang5;
