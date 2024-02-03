import Btn from "../components/Btn";
const SupportPay = () => {
  return (
    <form
      data-aos-duration="1500"
      data-aos="fade-up"
      className="p-[40px] text-white">
      <div className="md:flex mb-8 items-center gap-5">
        <div className="md:w-[50%]">
          <label>First Name</label>
          <input
            placeholder="FName"
            className="bg-[#141414] border my-3 border-[#262626] rounded-lg outline-none p-3 w-full"
          />
        </div>
        <div className="md:w-[50%]">
          <label>Last Name</label>
          <input
            placeholder="LName"
            className="bg-[#141414] border my-3 border-[#262626] rounded-lg outline-none p-3  w-full"
          />
        </div>
      </div>
      <div className="md:flex items-center mb-8 gap-5">
        <div className="md:w-[50%]">
          <label>Email</label>
          <input
            placeholder="Email"
            className="bg-[#141414] border my-3 border-[#262626] rounded-lg outline-none p-3 w-full"
          />
        </div>
        <div className="md:w-[50%]">
          <label>Phone Num</label>
          <input
            placeholder="Phone"
            className="bg-[#141414] border my-3 border-[#262626] rounded-lg outline-none p-3  w-full"
          />
        </div>
      </div>
      <div className=" mb-2 h-[163px] gap-5">
        <div className="w-full">
          <label>Message</label>
          <textarea
            placeholder="FName"
            className="bg-[#141414] border my-3 border-[#262626] rounded-lg outline-none p-5 resize-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>I agree with Terms of Use and Privacy Policy</p>
        <div className="w-[173px] h-[40px]">
          <Btn ok={false} title={"Message"} />
        </div>
      </div>
    </form>
  );
};

export default SupportPay;
