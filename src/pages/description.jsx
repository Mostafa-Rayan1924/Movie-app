import Plans from "../components/Plans";
import Table from "../components/Table";
import Ads from "../components/Ads";
import Streaming from "../components/Streaming";

const description = () => {
  return (
    <div>
      <div className="pt-[150px] md:pt-[200px]">
        <Plans />
      </div>
      <Table />
      <Ads />
      <Streaming />
    </div>
  );
};
export default description;
