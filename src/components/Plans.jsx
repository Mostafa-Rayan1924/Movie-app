import { Link } from "react-router-dom";
import Btn from "./Btn";
import MainTitle from "./MainTitle";

const Plans = () => {
  let h2 = "Choose the plan that's right for you";
  let p =
    "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!";
  let data = [
    {
      id: 1,
      title: "Basic Plan",
      desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including titles.",
      price: "$9.99",
      smPrice: "/month",
    },
    {
      id: 2,
      title: "Standard Plan",
      desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "$14.99",
      smPrice: "/month",
    },
    {
      id: 3,
      title: "Premium Plan",
      desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing featuring a range  ",
      price: "$12.99",
      smPrice: "/month",
    },
  ];
  let dataMap = data.map((item) => {
    return (
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        className="p-10 pr-[10px] bg-[#1A1A1A] border border-[#262626] hover:border-[#e50000]  hover:translate-y-[-10px] transition-all duration-300 rounded-lg">
        <h3>{item.title}</h3>
        <p className="mb-6 mt-2.5 ">{item.desc}</p>
        <div className="flex items-center mb-6">
          <h2>{item.price}</h2>
          <p>{item.smPrice}</p>
        </div>
        <div className="flex w-[280px] h-[49px] items-center gap-2">
          <Link className="w-full h-full" to={"/description"}>
            <Btn ok={false} color={false} title={"choose plan"} />
          </Link>
          <Link className="w-full h-full" to={"/description"}>
            <Btn ok={false} title={"free trial"} />
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section className="pb-[150px]">
      <div className="container ">
        <MainTitle h2={h2} p={p} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dataMap}
        </div>
      </div>
    </section>
  );
};

export default Plans;
