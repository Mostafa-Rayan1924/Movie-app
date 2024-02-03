import MainTitle from "./MainTitle";
import img1 from "../images/Home/phone.svg";
import img2 from "../images/Home/tablet.svg";
import img3 from "../images/Home/tv.svg";
import img4 from "../images/Home/lab.svg";
import img5 from "../images/Home/game.svg";
import img6 from "../images/Home/vr.svg";

const Streaming = () => {
  let data = [
    {
      id: 1,
      icon: img1,
      title: "Smartphones",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 2,
      icon: img2,
      title: "Tablet",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 1,
      icon: img3,
      title: "Smart TV",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 1,
      icon: img4,
      title: "Laptops",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 1,
      icon: img5,
      title: "Gaming Consoles",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 1,
      icon: img6,
      title: "VR Headsets ",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];
  let Datamap = data.map((item) => {
    return (
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        key={item.id}
        className="p-[40px] boxGradient border border-[#262626] hover:translate-y-[-10px] transition-all duration-300  rounded-xl">
        <div className="flex items-center gap-5 mb-[36px]">
          <div>
            <img
              className="bg-[#141414] border border-[#1f1f1f] py-3 px-5 rounded-lg"
              src={item.icon}
            />
          </div>
          <h3>{item.title}</h3>
        </div>
        <p>{item.desc}</p>
      </div>
    );
  });
  let h2 = "We Provide you streaming experience across various devices.";
  let p =
    "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.";
  return (
    <section className="pb-[150px]">
      <div className="container">
        <MainTitle h2={h2} p={p} />
        <div className="grid grid-cols-1  md:grid-cols-2 gap-x-3 gap-y-4 lg:grid-cols-3">
          {Datamap}
        </div>
      </div>
    </section>
  );
};

export default Streaming;
