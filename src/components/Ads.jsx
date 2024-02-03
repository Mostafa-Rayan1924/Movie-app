import Btn from "./Btn";
import MainTitle from "./MainTitle";

const Ads = () => {
  let h2 = "Start your free trial today!";
  let p =
    "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.";
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="bottom-bottom"
      className="container pb-[150px]">
      <div className="text-white h-[330px] md:h-[250px] AdsBackground rounded-xl ">
        <div className="absolute top-1/2 -translate-y-1/2 px-[62px]  text-center lg:text-start flex items-center flex-wrap justify-between gap-4">
          <MainTitle h2={h2} p={p} />
          <div className="w-[149px] h-[49px] mx-auto ">
            <Btn ok={false} title={"Free trial"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
