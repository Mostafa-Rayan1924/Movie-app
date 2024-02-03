import MainTitle from "../components/MainTitle";
import MovieApiCom from "./MovieApiCom";

const Trending = () => {
  let h2 = "Trending Now";
  return (
    <div className="container pb-[150px]">
      <MainTitle h2={h2} />
      <MovieApiCom
        apiUrl={"https://api.themoviedb.org/3/trending/all/day?language=en-US"}
      />
    </div>
  );
};

export default Trending;
