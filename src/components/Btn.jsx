import pause from "../images/Home/buttonIcon.svg";
const Btn = ({ title, ok = true, color = true }) => {
  return (
    <button
      className={`${color == false ? "bg-black" : "bg-[#e50000]"}
      } text-white w-full justify-center flex items-center  h-full ${
        color == false
          ? "hover:bg-[#111111]"
          : "hover:bg-red-900 transition-all duration-300"
      } gap-2 rounded-lg`}>
      {ok ? <img alt="pause" src={pause} /> : null}
      {title}
    </button>
  );
};

export default Btn;
