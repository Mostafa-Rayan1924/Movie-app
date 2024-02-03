import React from "react";
import MainTitle from "./MainTitle";
import SupportPay from "../components/SupportPay";

import heroSupportImg from "../images/Home/hero.jpg";
const HeroSupport = () => {
  let h2 = "Welcome to our support page!";
  let p =
    "We're here to help you with any problems you may be having with our product.";
  return (
    <section className="text-white py-[150px] md:py-[200px]">
      <div className="container">
        <div className="lg:flex items-center justify-between  gap-10">
          <div
            data-aos-duration="1500"
            data-aos="fade-down"
            className="lg:w-[40%] mb-10 md:mb-0 ">
            <MainTitle h2={h2} p={p} />
            <img
              className="h-[370px] max-w-full rounded-xl border-4 object-cover  border-[#262626]"
              src={heroSupportImg}
            />
          </div>
          <div className="lg:w-[60%] md:h-[530px]  bg-[#0F0F0F] rounded-xl ">
            <SupportPay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSupport;
