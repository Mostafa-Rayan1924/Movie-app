import MainTitle from "./MainTitle";
import BoxOfApi from "./BoxOfApi";

const MainComponentOfPages = () => {
  let h2 = "Explore our wide variety of categories";
  let p =
    "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new";
  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <MainTitle h2={h2} p={p} />
      </div>
      <BoxOfApi />
    </div>
  );
};

export default MainComponentOfPages;
